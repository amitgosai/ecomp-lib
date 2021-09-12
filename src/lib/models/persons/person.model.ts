import { IAddress } from "../contacts/address.model";
import { IEmail } from "../contacts/email.model";
import { IPhone } from "../contacts/phone.model";
import { ISocialMediaID } from "../contacts/social-media-id.model";
import { IDbFields } from "../data/dbfields.model";

export const Gender = [{id: "M", value: "Male"}, {id: "F", value: "Female"}, {id: "O", value: "Other"}];
export type tGender = "M" | "F" | "O";

export interface IPerson extends IDbFields {
    firstName: string; 
    lastName?: string | null | undefined;  
    fullName: string; 
    fullNameLower: string; 
    gender?: tGender | null | undefined; 
    dateOfBirth?: Date | null | undefined; 
    contactGroup?: string[] | null | undefined; 
    websites: string[] | null | undefined; 
    phones: IPhone[] | null | undefined; 
    emails: IEmail[] | null | undefined; 
    addresses: IAddress[] | null | undefined; 
    socialMediaIDs: ISocialMediaID[] | null | undefined;
}