import { IDbFields } from "../data/dbfields.model";

export type ContactType = "Person" | "Company"; 

export const contactAssociationTypes = {
    Owner: "Owner", 
    Customer: "Customer", 
    Employee: "Employee", 
    ServiceProvider: "Service Provider", 
    Vendor: "Vendor", 
    Supplier: "Supplier", 
    Contractor: "Contractor", 
    Other: "Other"
}
export type tContactAssociationTypes = "Owner" | "Customer" | "Employee" | "Service Provider" | "Vendor" | "Supplier" | "Contractor" | "Other"; 

export const lkpContactAssociationTypes = [
    {value: "Owner", text: "Owner" },
    {value: "Customer", text: "Customer" },
    {value: "Employee", text: "Employee" },
    {value: "Service Provider", text: "Service Provider" },
    {value: "Vendor", text: "Vendor" },
    {value: "Supplier", text: "Supplier" },
    {value: "Contractor", text: "Contractor" },
    {value: "Other", text: "Other" },
];

export interface IContact extends IDbFields {
    companyId: string;
    companyName: string;
    companyNameLower: string;
    personId: string;
    personFullName: string;
    personFullNameLower: string;
    parentCompanyId?: string | null | undefined;
    parentCompanyName?: string | null | undefined;
    parentCompanyNameLower?: string | null | undefined;
    associationType: tContactAssociationTypes;
    jobTitleId: string | undefined;
    jobTitle?: string | undefined;
    isShareholder?: boolean | undefined;
    isThirdPartyAssociate?: boolean | undefined;
    sharePercent?: number | undefined;
    contactGroup?: string[] | null | undefined; 
}