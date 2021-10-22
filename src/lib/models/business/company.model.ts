import { IAddress } from "../contacts/address.model";
import { IEmail } from "../contacts/email.model";
import { IPhone } from "../contacts/phone.model";
import { ISocialMediaID } from "../contacts/social-media-id.model";
import { IDbFields } from "../data/dbfields.model";
import { IBankAccount } from "../finance/bank-account.model";
import { tCompanyTypes } from "./company-type.model";
import { ITaxID } from "./tax-id.model";

export interface ICompany extends IDbFields {
    publicId: string; 
    companyLogo?: string | null | undefined; 
    companyName: string; 
    companyNameLower?: string | null | undefined; 
    parentCompanyId?: string | null | undefined;
    parentCompanyName?: string | null | undefined;
    parentCompanyNameLower?: string | null | undefined;
    companyTypeId?: string | null | undefined;
    companyType?: tCompanyTypes | null | undefined; 
    registrationNumber?: string | null | undefined; 
    dateOfIncorporation?: Date | null | undefined; 
    taxIDs?: ITaxID[] | null | undefined; 
    websites?: string[] | null | undefined; 
    phones: IPhone[] | null | undefined; 
    emails: IEmail[] | null | undefined; 
    addresses: IAddress[] | null | undefined; 
    socialMediaIDs: ISocialMediaID[] | null | undefined; 
    bankAccounts: IBankAccount[] | null | undefined;
}