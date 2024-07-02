export interface Website {
  type: string;
  name: string;
  url: string;
  note: string;
}

export interface Accused {
  fullName: string;
  nationality: string;
  gender: string;
  presentInUAE: string;
  address?: string;
  contactNo: string;
  email: string;
  websiteDetails: boolean;
  websites: Website[];
}
