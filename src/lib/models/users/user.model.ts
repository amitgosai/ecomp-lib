import { IDbFields } from "../data/dbfields.model";
import { IUserGroup } from "./user-group.model";
import { IPerson } from "../persons/person.model";

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