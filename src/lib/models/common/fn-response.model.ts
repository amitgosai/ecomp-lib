export type tResponseCodes = "SUCCESS" | "VALIDATION_MESSAGE" | "INVALID_REQUEST"| "INVALID_PARAM"| "PARAM_MISSING"| "USER_NOT_FOUND"| "PAGE_NOT_FOUND"| "NO_DATA"| "DATA_DELETED"| "DATA_FETCH_ERROR"| "DATA_WRITE_ERROR"| "UNHANDLED_ERROR"| "NOT_AUTHORIZED";
export interface IFnResponse {
    isSuccess: boolean; 
    respCode: tResponseCodes;
    message: string;
    data: any | null;
    error: any | string | null;
}