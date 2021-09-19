export interface IMailOTPParams {
    fromMail: string;
    toMail: string;
    mailSubject: string; 
    customerName: string | null | undefined;
    displaySenderName: string | null | undefined;
    mailTemplateId: string;
    customerReplaceText: string | null | undefined;
    otpReplaceText: string;
    isCreateUser: boolean;
}