import { IDbFields } from "../..";

export class WhereParam {
    public columnName: string = ""; 
    public operator: string = ""; 
    public value: any;  
  
    constructor(columnName: string, operator: string, value: any) {
      this.columnName = columnName; 
      this.operator = operator; 
      this.value = value; 
    }
}

// tslint:disable-next-line: max-classes-per-file
export class DbFields implements IDbFields {
  public id: string = ""; 
  public dbName: string = "Firestore"; 
  public createdOn?: Date | null | undefined; 
  public createdBy?: string | null | undefined; 
  public updatedOn?: Date | null | undefined; 
  public updatedBy?: string | null | undefined; 
  public isDeleted?: boolean | null | undefined; 
  public deletedOn?: Date | null | undefined; 
  public deletedBy?: string | null | undefined; 
  public notes?: string | null | undefined = ""; 
  public rowOrder?: number | null | undefined; 
}