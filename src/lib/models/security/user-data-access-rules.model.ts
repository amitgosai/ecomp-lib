import { IDbFields } from "../data/dbfields.model";
import { tAccessLevel } from "./group-data-access-rules.model";

export interface IUserDataAccessRules extends IDbFields {
    appId: string;
    userId: string;
    collectionName: string; 
    accessLevel: tAccessLevel;
    allowCreate: boolean;
    allowUpdate: boolean;
    allowDelete: boolean; 
    allowRead: boolean;
    allowSoftDelete: boolean;
}