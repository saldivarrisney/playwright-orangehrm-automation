export type MyInfoQualifications_Experience= {
    qualification: string;
    company: string;
    jobTitle: string;
    from: string;
    to: string;
    comment: string;
}

export type MyInfoQualifications_Education= {
    level: string;
    institute: string;
    majorSpecialization: string;
    year: string;
    gpaScore: string;
    startDate: string;
    endDate: string;
}
export type MyInfoQualifications_Skills= {
    skill: string;
    yearsOfExperience: string;
    commentSkills: string;
}
export type MyInfoQualifications_Language= {
    language: string;
    fluency: string;
    competency: string;
    commentLanguage: string;
}
export type MyInfoQualifications_License= {
    licenseType: string;
    licenseNumber: string;
    issuedDate: string;
    expiryDate: string;
}

export type MyInfoQualifications_AttachFile = {
    attachmentQualifications: string;
    commentQualifications: string;
}