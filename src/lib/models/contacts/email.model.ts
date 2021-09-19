export const EmailTypes = {
    Personal: "Personal", 
    Work: "Work", 
    Sales: "Sales", 
    Support: "Support", 
    TechSupport: "Tech Support", 
    CustomerCare: "Customer Care", 
    Other: "Other"
}

export type tEmailTypes = "Personal" | "Work" | "Sales" | "Support" | "Tech Support" | "Customer Care" | "Other"; 

export interface IEmail {
    email: string; 
    emailType?: string | null | undefined;
    isPrimary?: boolean | null | undefined; 
    isVerified?: boolean | null | undefined; 
}