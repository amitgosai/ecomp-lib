import { IDbFields } from "../data/dbfields.model";
import { IUserGroup } from "./user-group.model";
import { IPerson } from "../persons/person.model";
import { IDevice } from "../system/device.model";
import { tPerCompAssocType } from "../contacts/contact.model";

export interface User extends IDbFields {
    userName: string; 
    photoURL: string | null | undefined; 
    displayName?: string | null | undefined; 
    personId: string; 
    person: IPerson;
    registeredEmail?: string | null | undefined; 
    registeredMobile?: string | null | undefined; 
    isApproved?: boolean | null | undefined; 
    lastOTP?: string | null | undefined; 
    mailVerified?: boolean | null | undefined; 
    mobileVerified?: boolean | null | undefined; 
    isAnonymous: boolean | null | undefined; 
    lastLoginDate?: Date | null | undefined; 
    privacyAgreedOn: Date | null | undefined;  
    privacyAgreeDevice: {
        deviceIP?: string | null | undefined, 
        deviceID?: string | null | undefined, 
        deviceOS?: string | null | undefined,
        deviceName?: string | null | undefined
    } | null | undefined; 
    tncAgreedOn: Date | null | undefined; 
    tncAgreeDevice: {
        deviceIP?: string | null | undefined; 
        deviceID?: string | null | undefined; 
        deviceOS?: string | null | undefined; 
        deviceName?: string | null | undefined; 
    } | null | undefined; 
    appAccess?: string[] | null | undefined; 
    userGroups?: IUserGroup[] | null | undefined; 
}


export interface ICreateUserParams {
    uid?: string | undefined | null; 
    userName: string;
    fullName: string; 
    companyId: string | null | undefined;
    companyName: string;
    associateAs: tPerCompAssocType | string;
    appId: string;
    email: string | null | undefined; 
    emailVerified: boolean | null | undefined; 
    countryCode: string | null | undefined;
    phone: string | null | undefined;
    phoneVerified: boolean | null | undefined;
    device: IDevice | null | undefined;
}

export interface IUserExistsParams {
    email: string | null | undefined; 
    countryCode?: string | null | undefined; 
    phoneNumber: string | null | undefined;
}

export interface IVerifyOtpParams {
    otp: string;
    receiverId: string;
}