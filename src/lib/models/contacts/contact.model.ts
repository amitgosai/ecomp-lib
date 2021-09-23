import { IDbFields } from "../data/dbfields.model";

export type ContactType = "Person" | "Company"; 

export const perCompAssocType = {
    Owner: "Owner", 
    Customer: "Customer", 
    Employee: "Employee", 
    ServiceProvider: "Service Provider", 
    Vendor: "Vendor", 
    Supplier: "Supplier", 
    Contractor: "Contractor", 
    Other: "Other"
}
export type tPerCompAssocType = "Owner" | "Customer" | "Employee" | "Service Provider" | "Vendor" | "Supplier" | "Contractor" | "Other"; 

export interface IContact extends IDbFields {
    companyId: string;
    companyName: string;
    companyNameLower: string;
    personId: string;
    personFullName: string;
    parentCompanyId?: string | null | undefined;
    parentCompanyName?: string | null | undefined;
    parentCompanyNameLower?: string | null | undefined;
    associationType: tPerCompAssocType;
    jobTitleId: string | undefined;
    jobTitle?: string | undefined;
    isShareholder?: boolean | undefined;
    isThirdPartyAssociate?: boolean | undefined;
    sharePercent?: number | undefined;
    contactGroup?: string[] | null | undefined; 
}