export const translations = {
  tr: {
    panel: "Panel",
    map: "Harita",
    logistics: "Lojistik",
    scanner: "Tarama Merkezi",
    volunteers: "Gönüllü Sistemi",
    field: "Saha Bildirimi",
    publicHealth: "Halk Sağlığı",
    reports: "Raporlar",
    ai: "ARZ AI",
    profile: "Profil",
    settings: "Ayarlar",
    login: "Giriş Yap",
    register: "Kayıt Ol",
    logout: "Çıkış Yap",
    email: "E-posta",
    password: "Şifre",
    fullName: "Ad Soyad",
    phone: "Telefon",
    role: "Rol",
    save: "Kaydet",
    language: "Dil",
    theme: "Tema"
  },
  en: {
    panel: "Dashboard",
    map: "Map",
    logistics: "Logistics",
    scanner: "Scan Center",
    volunteers: "Volunteer System",
    field: "Field Report",
    publicHealth: "Public Health",
    reports: "Reports",
    ai: "ARZ AI",
    profile: "Profile",
    settings: "Settings",
    login: "Login",
    register: "Register",
    logout: "Logout",
    email: "Email",
    password: "Password",
    fullName: "Full Name",
    phone: "Phone",
    role: "Role",
    save: "Save",
    language: "Language",
    theme: "Theme"
  }
};

export function t(lang, key) {
  return translations[lang]?.[key] || translations.tr[key] || key;
}
