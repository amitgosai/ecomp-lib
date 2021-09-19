import { IDbFields } from "../data/dbfields.model";
import { IUserScreenElementAccess } from "./user-screen-element-access.model";

export interface IUserScreenPermission extends IDbFields {
    userId: string;
    appId: string;
    screenId: string;
    companyId: string;
    view: boolean; 
    enabled?: boolean | null | undefined;
    isRootUser?: boolean | null | undefined;
    elementAccess?: IUserScreenElementAccess[] | null | undefined;
}