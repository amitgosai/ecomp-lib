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

export const lkpEmailTypes = [
    {value: "Personal", text: "Personal" },
    {value: "Work", text: "Work" },
    {value: "Sales", text: "Sales" },
    {value: "Support", text: "Support" },
    {value: "Tech Support", text: "Tech Support" },
    {value: "Customer Care", text: "Customer Care" },
    {value: "Other", text: "Other" },
];

export interface IEmail {
    email: string; 
    emailType?: string | null | undefined;
    isPrimary?: boolean | null | undefined; 
    isVerified?: boolean | null | undefined; 
}