export const translations = {
  tr: {
    panel: "Panel", map: "Harita", logistics: "Lojistik", scanner: "Tarama Merkezi",
    volunteers: "Gönüllü Sistemi", field: "Saha Bildirimi", publicHealth: "Halk Sağlığı",
    reports: "Raporlar", ai: "ARZ AI", profile: "Profil", settings: "Ayarlar",
    login: "Giriş Yap", register: "Kayıt Ol", logout: "Çıkış Yap", email: "E-posta",
    password: "Şifre", fullName: "Ad Soyad", phone: "Telefon", role: "Rol", save: "Kaydet",
    language: "Dil", theme: "Tema", dashboard: "Genel Yönetim Paneli"
  },
  en: {
    panel: "Dashboard", map: "Map", logistics: "Logistics", scanner: "Scan Center",
    volunteers: "Volunteer System", field: "Field Report", publicHealth: "Public Health",
    reports: "Reports", ai: "ARZ AI", profile: "Profile", settings: "Settings",
    login: "Login", register: "Register", logout: "Logout", email: "Email",
    password: "Password", fullName: "Full Name", phone: "Phone", role: "Role", save: "Save",
    language: "Language", theme: "Theme", dashboard: "Operations Dashboard"
  },
  de: { panel:"Übersicht", map:"Karte", logistics:"Logistik", scanner:"Scan-Zentrum", volunteers:"Freiwillige", field:"Feldmeldung", publicHealth:"Öffentliche Gesundheit", reports:"Berichte", ai:"ARZ KI", profile:"Profil", settings:"Einstellungen", login:"Anmelden", register:"Registrieren", logout:"Abmelden", email:"E-Mail", password:"Passwort", fullName:"Vollständiger Name", phone:"Telefon", role:"Rolle", save:"Speichern", language:"Sprache", theme:"Design", dashboard:"Einsatzübersicht" },
  fr: { panel:"Tableau de bord", map:"Carte", logistics:"Logistique", scanner:"Centre de scan", volunteers:"Volontaires", field:"Rapport terrain", publicHealth:"Santé publique", reports:"Rapports", ai:"ARZ IA", profile:"Profil", settings:"Paramètres", login:"Connexion", register:"Inscription", logout:"Déconnexion", email:"E-mail", password:"Mot de passe", fullName:"Nom complet", phone:"Téléphone", role:"Rôle", save:"Enregistrer", language:"Langue", theme:"Thème", dashboard:"Tableau opérationnel" },
  az: { panel:"Panel", map:"Xəritə", logistics:"Logistika", scanner:"Skan Mərkəzi", volunteers:"Könüllü Sistemi", field:"Sahə Bildirişi", publicHealth:"İctimai Sağlamlıq", reports:"Hesabatlar", ai:"ARZ AI", profile:"Profil", settings:"Ayarlar", login:"Daxil ol", register:"Qeydiyyat", logout:"Çıxış", email:"E-poçt", password:"Şifrə", fullName:"Ad Soyad", phone:"Telefon", role:"Rol", save:"Saxla", language:"Dil", theme:"Tema", dashboard:"Əməliyyat Paneli" },
  ar: { panel:"لوحة التحكم", map:"الخريطة", logistics:"اللوجستيات", scanner:"مركز المسح", volunteers:"المتطوعون", field:"بلاغ ميداني", publicHealth:"الصحة العامة", reports:"التقارير", ai:"ARZ AI", profile:"الملف الشخصي", settings:"الإعدادات", login:"تسجيل الدخول", register:"إنشاء حساب", logout:"تسجيل الخروج", email:"البريد الإلكتروني", password:"كلمة المرور", fullName:"الاسم الكامل", phone:"الهاتف", role:"الدور", save:"حفظ", language:"اللغة", theme:"المظهر", dashboard:"لوحة العمليات" }
};

export function t(lang, key) {
  return translations[lang]?.[key] || translations.tr[key] || key;
}
