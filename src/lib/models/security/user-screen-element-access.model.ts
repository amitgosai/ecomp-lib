import { IDbFields } from "../data/dbfields.model";

export interface IUserScreenElementAccess extends IDbFields {
    userId?: string | null | undefined; 
    groupId?: string | null | undefined;
    screenId: string;
    elementId: string;
    view: boolean;
    enabled: boolean;
}