export interface SidenavModel {
  name: string;
  isHeader: boolean;
  icon?: string;
  link?: string;
}

export const superAdmin: SidenavModel[] = [
  { name: "File Maintenance", isHeader: true },
  { name: "Minister", icon: "folder", link: "ministers", isHeader: false },
  { name: "Certificates", isHeader: true },
  { name: "Baptism", icon: "folder", link: "baptism", isHeader: false },
  {
    name: "Confirmation",
    icon: "folder",
    link: "confirmation",
    isHeader: false
  },
  { name: "Marriage", icon: "folder", link: "marriage", isHeader: false },
  { name: "Death", icon: "folder", link: "death", isHeader: false }
];

export const registrar: SidenavModel[] = [
  { name: "File Maintenance", isHeader: true },
  { name: "Minister", icon: "folder", link: "ministers", isHeader: false },
  { name: "Certificates", isHeader: true },
  { name: "Baptism", icon: "folder", link: "baptism", isHeader: false },
  {
    name: "Confirmation",
    icon: "folder",
    link: "confirmation",
    isHeader: false
  },
  { name: "Marriage", icon: "folder", link: "marriage", isHeader: false },
  { name: "Death", icon: "folder", link: "death", isHeader: false }
];
