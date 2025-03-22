export interface Region {
  id: string;
  name: string;
  icon: string;
  description: string;
  specialties: string[];
}
export const regions: Region[] = [
  {
    id: "all",
    name: "All Regions",
    icon: "🇩🇿",
    description: "Dishes from all regions of Algeria",
    specialties: ["Couscous", "Bourek", "Chakchouka"],
  },
  {
    id: "kabylie",
    name: "Kabylie",
    icon: "🏔️",
    description: "Mountainous region known for its Berber cuisine",
    specialties: ["Tajine Zitoun", "Seksu"],
  },
  {
    id: "sahara",
    name: "Sahara",
    icon: "🏜️",
    description: "Desert region with unique culinary traditions",
    specialties: ["Mechoui", "Mhadjeb"],
  },
  {
    id: "coastal",
    name: "Coastal",
    icon: "🌊",
    description: "Mediterranean coastal cuisine",
    specialties: ["Calentica", "Sardine dishes"],
  },
  {
    id: "eastern",
    name: "Eastern",
    icon: "🌄",
    description: "Eastern region with distinct flavors",
    specialties: ["Chakhchoukha", "Doubara"],
  },
  {
    id: "western",
    name: "Western",
    icon: "🌅",
    description: "Western Algerian culinary traditions",
    specialties: ["Harira", "Sfiriya"],
  },
  {
    id: "central",
    name: "Central",
    icon: "🏙️",
    description: "Cuisine from the heart of Algeria",
    specialties: ["Rechta", "Mahjouba"],
  },
];
