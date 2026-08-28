import { Page, Locator} from "@playwright/test";
import { MyInfoQualifications_Education, MyInfoQualifications_Experience, MyInfoQualifications_Language, MyInfoQualifications_License, MyInfoQualifications_Skills,MyInfoQualifications_AttachFile} from "../../types/MyInfo/MyInfo_Qualifications";


export class MyInfoQualificationsTab {
readonly page: Page
//experience
readonly addWorkExperienceButton: Locator
readonly company: Locator
readonly jobTitle: Locator
readonly fromDate: Locator
readonly toDate: Locator
readonly experienceComment: Locator
readonly saveExperienceButton: Locator
//education
readonly addWorkEducationButton: Locator
readonly selectDropdown: Locator
readonly level: Locator
readonly institute: Locator
readonly majorSpecialization: Locator
readonly year: Locator
readonly gpaScore: Locator
readonly startDate: Locator
readonly endDate: Locator
readonly saveEducationButton: Locator
//skills
readonly addWorkSkillButton: Locator
readonly skill: Locator
readonly yearsOfExperience: Locator
readonly skillsComment: Locator
readonly skillsSaveButton: Locator
//language
readonly addWorkLanguageButton: Locator
readonly language: Locator
readonly fluency: Locator
readonly competency: Locator
readonly languageComment: Locator
readonly languageSaveButton: Locator
//license
readonly addWorkLicenseButton: Locator
readonly licenseType: Locator
readonly licenseNumber: Locator
readonly issuedDate: Locator
readonly expiryDate: Locator
readonly licenseSaveButton: Locator




    constructor(page: Page){

this.page = page;
//experience
this.addWorkExperienceButton = page.locator('.orangehrm-action-header').filter({hasText: 'Work Experience'}).getByRole('button', {name: "Add"});
this.company = page .locator('.oxd-input-group').filter({ hasText: 'Company' }).locator('input');
this.jobTitle =page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('input');
this.fromDate = page .locator('.oxd-input-group').filter({ hasText: 'From' }).locator('input');
this.toDate = page .locator('.oxd-input-group').filter({ hasText: 'To' }).locator('input');
this.experienceComment =page .locator('.oxd-input-group').filter({ hasText: 'Comment' }).locator('textarea');
this.saveExperienceButton = page.locator('form').filter({hasText: 'Company'}).getByRole('button', {name: "Save"});
//education
this.addWorkEducationButton = page.locator('.orangehrm-action-header').filter({hasText: 'Education'}).getByRole('button', {name: "Add"});
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.level = page .locator('.oxd-input-group').filter({ hasText: 'Level' }).locator('.oxd-select-text-input');
this.institute = page .locator('.oxd-input-group').filter({ hasText: 'Institute' }).locator('input');
this.majorSpecialization = page .locator('.oxd-input-group').filter({ hasText: 'Major/Specialization' }).locator('input');
this.year = page .locator('.oxd-input-group').filter({ hasText: 'Year' }).locator('input');
this.gpaScore = page .locator('.oxd-input-group').filter({ hasText: 'GPA/Score' }).locator('input');
this.startDate = page .locator('.oxd-input-group').filter({ hasText: 'Start Date' }).locator('input');
this.endDate = page .locator('.oxd-input-group').filter({ hasText: 'End Date' }).locator('input');
this.saveEducationButton = page.locator('form').filter({ hasText: 'Level' }).getByRole('button',{name: 'Save'});
//skills
this.addWorkSkillButton = page.locator('.orangehrm-action-header').filter({hasText: 'Skills'}).getByRole('button', {name: "Add"});
this.skill = page .locator('.oxd-input-group').filter({ hasText: 'Skill' }).locator('.oxd-select-text-input');
this.yearsOfExperience = page .locator('.oxd-input-group').filter({ hasText: 'Years of Experience' }).locator('input');
this.skillsComment =page .locator('.oxd-input-group').filter({ hasText: 'Comments' }).locator('textarea');
this.skillsSaveButton = page.locator('form').filter({ hasText: 'Skill' }).getByRole('button',{name: 'Save'});
//language
this.addWorkLanguageButton = page.locator('.orangehrm-action-header').filter({hasText: 'Language'}).getByRole('button', {name: "Add"});
this.language = page .locator('.oxd-input-group').filter({ hasText: 'Language' }).locator('.oxd-select-text-input');
this.fluency = page .locator('.oxd-input-group').filter({ hasText: 'Fluency' }).locator('.oxd-select-text-input');
this.competency = page .locator('.oxd-input-group').filter({ hasText: 'Competency' }).locator('.oxd-select-text-input');
this.languageComment = page.locator('form').filter({ hasText: 'Language' }).locator('textarea');
this.languageSaveButton = page.locator('form').filter({ hasText: 'Language' }).getByRole('button',{name: 'Save'});
//license
this.addWorkLicenseButton = page.locator('.orangehrm-action-header').filter({hasText: 'License'}).getByRole('button', {name: "Add"});
this.licenseType = page .locator('.oxd-input-group').filter({ hasText: 'License Type' }).locator('.oxd-select-text-input');
this.licenseNumber = page .locator('.oxd-input-group').filter({ hasText: 'License Number' }).locator('input');
this.issuedDate = page .locator('.oxd-input-group').filter({ hasText: 'Issued Date' }).locator('input');
this.expiryDate =page .locator('.oxd-input-group').filter({ hasText: 'Expiry Date' }).locator('input');
this.licenseSaveButton = page.locator('form').filter({ hasText: 'License Type' }).getByRole('button',{name: 'Save'});
//attachment
this.addAttachmentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Attachment'}).getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.attachmentComment = page.getByPlaceholder("Type comment here");
this.attachmentSaveButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});
}

async addQualifications_Experience(data: MyInfoQualifications_Experience){
    await this.addWorkExperienceButton.click();
    await this.company.fill(data.company);
    await this.jobTitle.fill(data.jobTitle);
    await this.fromDate.fill(data.from);
    await this.toDate.fill(data.to);
    await this.experienceComment.fill(data.comment)
    await this.saveExperienceButton.click();
}

async addQualifications_Education(data: MyInfoQualifications_Education){
    await this.addWorkEducationButton.click();
    await this.level.pressSequentially(data.level);
    await this.selectDropdown.getByRole('option', {name: data.level, exact: true}).click();
    await this.institute.fill(data.institute);
    await this.majorSpecialization.fill(data.majorSpecialization);
    await this.year.fill(data.year);
    await this.gpaScore.fill(data.gpaScore);
    await this.startDate.fill(data.startDate);
    await this.endDate.fill(data.endDate);
    await this.saveEducationButton.click();
}

async addQualifications_Skill(data: MyInfoQualifications_Skills){
    await this.addWorkSkillButton.click();
    await this.skill.click();
    await this.skill.pressSequentially(data.skill);
    await this.selectDropdown.getByRole('option', {name: data.skill, exact: true}).click();
    await this.yearsOfExperience.fill(data.yearsOfExperience);
    await this.skillsComment.fill(data.commentSkills);
    await this.skillsSaveButton.click();
}

async addQualifications_Language(data: MyInfoQualifications_Language){
    await this.addWorkLanguageButton.click();
    await this.language.click();
    await this.language.pressSequentially(data.language);
    await this.selectDropdown.getByRole('option', {name:data.language, exact:true}).click();
    await this.fluency.pressSequentially(data.fluency);
    await this.selectDropdown.getByRole('option',{name: data.fluency, exact: true}).click();
    await this.competency.pressSequentially(data.competency);
    await this.selectDropdown.getByRole('option', {name: data.competency, exact:true}).click();
    await this.languageComment.fill(data.commentLanguage);
    await this.languageSaveButton.click();
}

async addQualifications_License(data: MyInfoQualifications_License){
    await this.addWorkLicenseButton.click();
    await this.licenseType.pressSequentially(data.licenseType);
    await this.selectDropdown.getByRole('option', {name: data.licenseType, exact:true}).click();
    await this.licenseNumber.fill(data.licenseNumber);
    await this.issuedDate.fill(data.issuedDate);
    await this.expiryDate.fill(data.expiryDate);
    await this.licenseSaveButton.click();
}

//  async addAttachment(data:MyInfoQualifications_AttachFile){
//     await this.addAttachmentButton.click();
//     await this.attachment.setInputFiles(data.attachmentQualifications);
//     await this.attachmentComment.fill(data.commentQualifications);
//     await this.attachmentSaveButton.click();
// }
}