// tslint:disable max-classes-per-file

import { AppMessage, ErrorTypes } from '../validations/validation';
import { WhereParam } from './data'; 

// Firebase Database Operations 
export const fbDbOps = {
    get: "get", 
    add: "add", 
    set: "set", 
    update: "update", 
    softdelete: "softdelete"
}; 

// Firebase Error Codes
export const fbErrorCodes = {
    auth: {
        userNotFound: {
        code: "auth/user-not-found", 
        errorCode: "auth/user-not-found",
        title: "User Not Found", 
        message: "User does not exists or deleted", 
        type: ErrorTypes.Info
        }, 
        emailAlreadyInUse: {
            code: "auth/email-already-in-use",
            errorCode: "auth/email-already-in-use", 
            title: "User Name already taken", 
            message: "The email address already in use by another account",
            type: ErrorTypes.Info
        },
        invalidPhoneNumber: {
            code: "auth/invalid-phone-number", 
            errorCode: "auth/invalid-phone-number",
            title: "Phone number invalid",
            message: "The phone number must be E.164 standard compliant",
            type: ErrorTypes.Info
        },
        phoneNumberAlreadyExists: {
            code: "auth/phone-number-already-exists", 
            errorCode: "auth/phone-number-already-exists", 
            title: "Phone Number already taken", 
            message: "Phone number already in use by another account",
            type: ErrorTypes.Info
        },
        wrongPassword: {
            code: "auth/wrong-password",
            errorCode: "auth/wrong-password",
            title: "Invalid Login", 
            message: "Incorrect Password", 
            type: ErrorTypes.Info
        }, 
        networkRequestFailed: {
            code: "auth/network-request-failed", 
            errorCode: "auth/network-request-failed", 
            title: "Network unavailable", 
            message: "Network unavailable", 
            type: ErrorTypes.Info
        }
    }, 
    storage: {
        Unauthorized: {
            code: "storage/unauthorized", 
            errorCode: "403", 
            title: "Cannot upload file/document", 
            message: "Cannot upload file/document due to large size", 
            type: ErrorTypes.Info
        }, 
        ObjectNotFound: {
            code: "storage/object-not-found", 
            errorCode: "404", 
            title: "File/Document not found", 
            message: "Uploaded file/document not found", 
            type: ErrorTypes.Info
        }
    }
}; 

export const fbFunc = {
    fnInitFirestore: "db-initFirestore", 
    fnGetAppDetails: "app-getAppDetails", 
    fnGetUserDetails: "users-getUserDetails", 
    fnUpdateUserDetails: "users-updateUserDetails", 
    fnUserEmailExists: "users-userEmailExists", 
    fnAddUserDetails: "users-addUserDetails", 
    fnSendEmailOTP: "comms-sendEmailOTP", 
    fnVerifyMailOTP: "comms-verifyMailOTP", 
    fngetCompanyTypesDropDown: "company-getCompanyTypesDropDown", 
    fnGetAllCompaniesDropDown: "company-getAllCompaniesDropDown", 
    fnGetCompaniesList: "company-getCompaniesList", 
    fngetUserScreenAccess: "security-getUserScreenAccess"
}

export interface IRetVal {
    isSuccess: boolean; 
    retCode: string; 
    message: string; 
    data: any; 
    error: any; 
}

export class FbWhereClause {
    private _params: WhereParam[] = []; 
  
    public addClause(columnName: string, operator: string, value: any) {
        this._params.push(new WhereParam(columnName, operator, value)); 
    }
  
    public getParams(): WhereParam[] {
        return this._params; 
    }
  
    public clearParams() {
        // Let's clean the array. Slow, but effective. 
        this._params.splice(0, this._params.length);
    }
  
    public getClause(): string {
        let _retVal: string = ''; 
        let paramValue: string = '';
        let _paramString: string = '';
  
        this._params.forEach(param => {
            if(typeof param.value === 'string' || param.value instanceof String) {
                paramValue = "'" + param.value + "'"; 
            } else {
                paramValue = String(param.value); 
            }
            _paramString =  ".where('" + param.columnName.toString() + "', '" + param.operator.toString() + "', " + paramValue.toString() + ")";  
            _retVal += _paramString 
        }); 
  
        return _retVal; 
    }
}

export class FbUtils {

    public static getFbError(errorObj: any): AppMessage | null | undefined {
        let _retVal: AppMessage | null | undefined = new AppMessage();  

        if(errorObj && typeof errorObj === "object" && errorObj.hasOwnProperty("code")) {
            switch(errorObj.code) {
                case fbErrorCodes.auth.userNotFound.code:
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.userNotFound.title; 
                    _retVal.messageId = fbErrorCodes.auth.userNotFound.code; 
                    _retVal.messageString = fbErrorCodes.auth.userNotFound.message; 
                    _retVal.messageType = fbErrorCodes.auth.userNotFound.type; 
                    _retVal.isSuccess = false; 
                    break; 
                case fbErrorCodes.auth.emailAlreadyInUse.code: 
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.emailAlreadyInUse.title; 
                    _retVal.messageId = fbErrorCodes.auth.emailAlreadyInUse.code; 
                    _retVal.messageString = fbErrorCodes.auth.emailAlreadyInUse.message; 
                    _retVal.messageType = fbErrorCodes.auth.emailAlreadyInUse.type; 
                    _retVal.isSuccess = false; 
                    break; 
                case fbErrorCodes.auth.invalidPhoneNumber.code:
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.invalidPhoneNumber.title; 
                    _retVal.messageId = fbErrorCodes.auth.invalidPhoneNumber.code; 
                    _retVal.messageString = fbErrorCodes.auth.invalidPhoneNumber.message; 
                    _retVal.messageType = fbErrorCodes.auth.invalidPhoneNumber.type; 
                    _retVal.isSuccess = false; 
                    break; 
                case fbErrorCodes.auth.phoneNumberAlreadyExists.code:
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.phoneNumberAlreadyExists.title; 
                    _retVal.messageId = fbErrorCodes.auth.phoneNumberAlreadyExists.code; 
                    _retVal.messageString = fbErrorCodes.auth.phoneNumberAlreadyExists.message; 
                    _retVal.messageType = fbErrorCodes.auth.phoneNumberAlreadyExists.type; 
                    _retVal.isSuccess = false; 
                    break; 
                case fbErrorCodes.auth.wrongPassword.code: 
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.wrongPassword.title; 
                    _retVal.messageId = fbErrorCodes.auth.wrongPassword.code; 
                    _retVal.messageString = fbErrorCodes.auth.wrongPassword.message; 
                    _retVal.messageType = fbErrorCodes.auth.wrongPassword.type; 
                    _retVal.isSuccess = false; 
                    break;
                case fbErrorCodes.auth.networkRequestFailed.code:  
                    _retVal.innerError = errorObj; 
                    _retVal.messageTitle = fbErrorCodes.auth.networkRequestFailed.title; 
                    _retVal.messageId = fbErrorCodes.auth.networkRequestFailed.code; 
                    _retVal.messageString = fbErrorCodes.auth.networkRequestFailed.message; 
                    _retVal.messageType = fbErrorCodes.auth.networkRequestFailed.type; 
                    _retVal.isSuccess = false; 
                    break;
                default: 
                    _retVal = null; 
            }
        }
        return _retVal; 
    }
}