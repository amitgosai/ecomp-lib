import { IDbFields } from "../data/dbfields.model";

export type tAccessLevel = "All" | "All Children" | "Specific Children";

export interface IGroupDataAccessRules extends IDbFields {
    appId: string;
    groupId: string;
    collectionName: string; 
    accessLevel: tAccessLevel;
    allowCreate: boolean;
    allowUpdate: boolean;
    allowDelete: boolean; 
    allowRead: boolean;
    allowSoftDelete: boolean;
}