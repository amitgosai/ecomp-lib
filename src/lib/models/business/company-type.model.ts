import { IDbFields } from "../data/dbfields.model";

export const companyTypes = {
    PvtLtd: "Private Limited", 
    PubLtd: "Public Limited", 
    Partnership: "Partnerships", 
    LLP: "Limited Liability Partnership", 
    OnePerson: "One Person", 
    SoleProp: "Sole Proprietorship", 
    SecEight: "Section 8 Company", 
    Other: "Other"
}; 
export type tCompanyTypes = "Private Limited" | "Public Limited" | "Partnerships" | "Limited Liability Partnership" | "One Person" | "Sole Proprietorship" | "Section 8 Company" | "Other"; 

export interface ICompanyTypes extends IDbFields {
    companyType: string;
    rowOrder: number;
}