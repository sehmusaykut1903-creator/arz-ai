import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { auth } from "./firebase-config.js";
import {
  createUserProfile,
  getUserProfile,
  getUserSettings
} from "./database.js";

export async function registerUser({
  email,
  password,
  fullName,
  phone,
  role,
  city,
  institution,
  department
}) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  const profile = await createUserProfile(cred.user, {
    fullName,
    phone,
    role,
    city,
    institution,
    department
  });

  return {
    user: cred.user,
    profile
  };
}

export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const profile = await getUserProfile(cred.user.uid);
  const settings = await getUserSettings(cred.user.uid);

  return {
    user: cred.user,
    profile,
    settings
  };
}

export async function logoutUser() {
  return signOut(auth);
}

export function listenAuth(callback) {
  return onAuthStateChanged(auth, async user => {
    if (!user) {
      callback(null);
      return;
    }

    const profile = await getUserProfile(user.uid);
    const settings = await getUserSettings(user.uid);

    callback({
      user,
      profile,
      settings
    });
  });
}
