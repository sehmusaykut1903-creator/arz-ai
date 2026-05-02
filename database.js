import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import { db } from "./firebase-config.js";
import { getRole } from "./roles.js";

export async function createUserProfile(user, extra = {}) {
  const roleId = extra.role || "citizen";
  const role = getRole(roleId);

  const profile = {
    uid: user.uid,
    email: user.email,
    fullName: extra.fullName || "",
    phone: extra.phone || "",
    role: roleId,
    roleLabel: role.label,
    allowedPages: role.pages,
    city: extra.city || "",
    institution: extra.institution || "Yozgat Bozok Üniversitesi Tıp Fakültesi",
    department: extra.department || "Halk Sağlığı Anabilim Dalı",
    avatarUrl: "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  await setDoc(doc(db, "profiles", user.uid), profile);

  await setDoc(doc(db, "userSettings", user.uid), {
    uid: user.uid,
    language: "tr",
    theme: "afad",
    fontSize: "medium",
    fontFamily: "system",
    notificationsEnabled: true,
    aiMemory: true,
    mapPreferences: {
      liveData: true,
      traffic: true,
      earthquakeLayer: true,
      floodLayer: true,
      fireLayer: true
    },
    accessibilitySettings: {
      boldText: false,
      highContrast: false,
      largeButtons: false
    },
    updatedAt: serverTimestamp()
  });

  return profile;
}

export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "profiles", uid));
  return snap.exists() ? snap.data() : null;
}

export async function updateUserProfile(uid, data) {
  await updateDoc(doc(db, "profiles", uid), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function getUserSettings(uid) {
  const snap = await getDoc(doc(db, "userSettings", uid));
  return snap.exists() ? snap.data() : null;
}

export async function updateUserSettings(uid, data) {
  await updateDoc(doc(db, "userSettings", uid), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function addShipment(uid, shipment) {
  return addDoc(collection(db, "shipments"), {
    ...shipment,
    createdBy: uid,
    createdAt: serverTimestamp()
  });
}

export async function listShipments(uid) {
  const q = query(collection(db, "shipments"), where("createdBy", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addReport(uid, report) {
  return addDoc(collection(db, "reports"), {
    ...report,
    createdBy: uid,
    createdAt: serverTimestamp()
  });
}

export async function listReports(uid) {
  const q = query(collection(db, "reports"), where("createdBy", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addAiHistory(uid, item) {
  return addDoc(collection(db, "aiHistory"), {
    ...item,
    uid,
    createdAt: serverTimestamp()
  });
}
