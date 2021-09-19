export const PhoneTypes = {
    Personal: "Personal",
    Mobile: "Mobile", 
    Home: "Home", 
    Work: "Work", 
    CustomerCare: "Customer Care", 
    Sales: "Sales", 
    Main: "Main", 
    Workfax: "Work fax", 
    Homefax: "Home fax", 
    Pager: "Pager", 
    Other: "Other"
}

export type tPhoneTypes = "Personal" | "Mobile" | "Home" | "Work" | "Customer Care" | "Sales" | "Main" | "Work fax" | "Home fax" | "Pager" | "Other"; 

export interface IPhone {
    phoneType?: string | null | undefined;
    countryCode?: string | null | undefined;
    phoneNumber: string;
    isPrimary?: boolean | null | undefined;
    isVerified?: boolean | null | undefined;
}