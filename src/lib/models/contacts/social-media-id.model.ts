export const SocialMediaTypes = {
    LinkedIn: "LinkedIn", 
    Google: "Google", 
    Twitter: "Twitter", 
    Insta: "Instagram", 
    WhatsApp: "WhatsApp", 
    Signal: "Signal", 
    Telegram: "Telegram", 
    YouTube: "YouTube", 
    Facebook: "Facebook", 
    Other: "Other"
}

export type tSocialMediaTypes = "LinkedIn" | "Google" | "Twitter" | "Instagram" | "WhatsApp" | "Signal" | "Telegram" | "YouTube" | "Facebook" | "Other"; 

export interface ISocialMediaID {
    socialMedia: string; 
    socialMediaID: string; 
    profileURL?: string | null | undefined; 
}