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

export const lkpPhoneTypes = [
    {value: "Personal", text: "Personal" },
    {value: "Mobile", text: "Mobile" },
    {value: "Home", text: "Home" },
    {value: "Work", text: "Work" },
    {value: "Customer Care", text: "Customer Care" },
    {value: "Sales", text: "Sales" },
    {value: "Main", text: "Main" },
    {value: "Work fax", text: "Work fax" },
    {value: "Home fax", text: "Home fax" },
    {value: "Pager", text: "Pager" },
    {value: "Other", text: "Other" },
]

export interface IPhone {
    phoneType?: string | null | undefined;
    countryCode?: string | null | undefined;
    phoneNumber: string;
    isPrimary?: boolean | null | undefined;
    isVerified?: boolean | null | undefined;
}