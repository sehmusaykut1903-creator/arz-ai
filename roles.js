export const roles = {
  citizen: {
    id: "citizen",
    label: "Vatandaş / Afetzede",
    pages: ["panel", "field", "map", "ai", "profile", "settings"]
  },
  doctor: {
    id: "doctor",
    label: "Hekim / Sağlık Personeli",
    pages: ["panel", "field", "map", "publicHealth", "reports", "ai", "profile", "settings"]
  },
  logistics: {
    id: "logistics",
    label: "Lojistik / Firma",
    pages: ["panel", "logistics", "map", "scanner", "reports", "ai", "profile", "settings"]
  },
  volunteer: {
    id: "volunteer",
    label: "Gönüllü",
    pages: ["panel", "volunteers", "field", "map", "ai", "profile", "settings"]
  },
  admin: {
    id: "admin",
    label: "Yönetici / AFAD Operatörü",
    pages: [
      "panel",
      "map",
      "logistics",
      "scanner",
      "volunteers",
      "field",
      "publicHealth",
      "reports",
      "ai",
      "profile",
      "settings"
    ]
  }
};

export function getRole(roleId) {
  return roles[roleId] || roles.citizen;
}
