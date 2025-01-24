export class User {
    name!: string ;
    mobNumber!: string;
    age!:number;
    dob!: string; 
    email!: string;
    password !: string;
    address!: Address;
    language!: string;
    gender!: string;
    aboutYou!: string;
    uploadPhoto!: string;
    role!: string;
    agreetc!: boolean;
}

export class Address  {
    id!:string;
    addline1!:string;
    addline2!: string
    city!: string
    state!: string;
    zipCode!: number;
  }

  export class Product {    
        id!: string;
        name!: string;
        uploadPhoto!: string;
        productDesc!: string;
        mrp!: number;
        dp!: number;
        status!: boolean;
  }

  export class Order{
   
        id!: string;
        userid!: number;
        sellerid!:number;
        product!: Product;
        deliveryAddress!:Address;
        contact!: number;
        dateTime!:Date
     
  }