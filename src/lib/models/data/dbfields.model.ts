export interface IDbFields {
    id: string; 
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