export const Databases = {
    Firestore: "Firestore", 
    MySQL: "MySQL", 
    MSSQL: "Microsoft SQL Server", 
    Oracle: "Oracle", 
    MongoDb: "MongoDb"
}; 

export interface IDb {
    dbName?: string | null | undefined;
}

export interface IDbFields extends IDb {
    id?: string | null | undefined; 
    createdOn?: Date | null | undefined; 
    createdBy?: string | null | undefined;  
    updatedOn?: Date | null | undefined; 
    updatedBy?: string | null | undefined;  
    isDeleted?: boolean | null | undefined; 
    deletedOn?: Date | null | undefined; 
    deletedBy?: string | null | undefined;  
    notes?: string | null | undefined; 
    rowOrder?: number | null | undefined; 
}