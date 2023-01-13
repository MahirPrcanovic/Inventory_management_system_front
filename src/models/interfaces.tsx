export interface Supplier {
  _id: string;
  name: string;
  uin: string;
  pdv?: number;
  phoneNumber: string;
  contactPerson?: string;
  email: string;
  dateOfStart?: Date;
  materials?: Material[];
}

export interface Material {
  _id: string;
  name: string;
  quantity: number;
  minQuantity: number;
  price: number;
  unitOfMeasure: string;
  isUsed: boolean;
  supplier: Supplier;
}
