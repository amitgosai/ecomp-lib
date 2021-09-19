import { IDbFields } from "../data/dbfields.model";

export const idTypes = {
    AadhaarCard: "Aadhaar Card", 
    PANCard: "PAN Card", 
    DrivingLicense: "Driving License", 
    Passport: "Passport",
    Other: "Other"
}

export type tIdTypes = "Aadhaar Card" | "PAN Card" | "Driving License" | "Passport" |"Other";