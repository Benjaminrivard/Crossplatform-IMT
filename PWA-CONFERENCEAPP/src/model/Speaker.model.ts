export interface Speaker {
  id: number;
  name: string;
  featured: boolean;
  company: string;
  companyLogo: string;
  country: string;
  photoUrl: string;
  shortBio: string;
  bio: string;
  tags: string[];
  badges: string[];
  socials: Socials[];
}

export interface Socials {
  icon: string;
  name: string;
  link: string;
}
