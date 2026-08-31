import { Page, Locator} from "@playwright/test";
import { Education, Experience, Language, License, Skills} from "../../types/MyInfo/MyInfo_Qualifications";
import { BasePage } from "../BasePage";

export class MyInfoQualificationsTab extends BasePage{
//experience
private readonly addExperienceButton: Locator
private readonly company: Locator
private readonly jobTitle: Locator
private readonly fromDate: Locator
private readonly toDate: Locator
private readonly experienceComment: Locator
private readonly saveExperienceButton: Locator
//education
private readonly addEducationButton: Locator
private readonly selectDropdown: Locator
private readonly level: Locator
private readonly institute: Locator
private readonly majorSpecialization: Locator
private readonly year: Locator
private readonly gpaScore: Locator
private readonly startDate: Locator
private readonly endDate: Locator
private readonly saveEducationButton: Locator
//skills
private readonly addSkillButton: Locator
private readonly skill: Locator
private readonly yearsOfExperience: Locator
private readonly skillsComment: Locator
private readonly skillsSaveButton: Locator
//language
private readonly addLanguageButton: Locator
private readonly language: Locator
private readonly fluency: Locator
private readonly competency: Locator
private readonly languageComment: Locator
private readonly languageSaveButton: Locator
//license
private readonly addLicenseButton: Locator
private readonly licenseType: Locator
private readonly licenseNumber: Locator
private readonly issuedDate: Locator
private readonly expiryDate: Locator
private readonly licenseSaveButton: Locator




    constructor(page: Page){

super(page);
//experience
this.addExperienceButton = page.locator('.orangehrm-action-header').filter({hasText: 'Work Experience'}).getByRole('button', {name: "Add"});
this.company = page .locator('.oxd-input-group').filter({ hasText: 'Company' }).locator('input');
this.jobTitle =page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('input');
this.fromDate = page .locator('.oxd-input-group').filter({ hasText: 'From' }).locator('input');
this.toDate = page .locator('.oxd-input-group').filter({ hasText: 'To' }).locator('input');
this.experienceComment =page .locator('.oxd-input-group').filter({ hasText: 'Comment' }).locator('textarea');
this.saveExperienceButton = page.locator('form').filter({hasText: 'Company'}).getByRole('button', {name: "Save"});
//education
this.addEducationButton = page.locator('.orangehrm-action-header').filter({hasText: 'Education'}).getByRole('button', {name: "Add"});
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
this.addSkillButton = page.locator('.orangehrm-action-header').filter({hasText: 'Skills'}).getByRole('button', {name: "Add"});
this.skill = page .locator('.oxd-input-group').filter({ hasText: 'Skill' }).locator('.oxd-select-text-input');
this.yearsOfExperience = page .locator('.oxd-input-group').filter({ hasText: 'Years of Experience' }).locator('input');
this.skillsComment =page .locator('.oxd-input-group').filter({ hasText: 'Comments' }).locator('textarea');
this.skillsSaveButton = page.locator('form').filter({ hasText: 'Skill' }).getByRole('button',{name: 'Save'});
//language
this.addLanguageButton = page.locator('.orangehrm-action-header').filter({hasText: 'Language'}).getByRole('button', {name: "Add"});
this.language = page .locator('.oxd-input-group').filter({ hasText: 'Language' }).locator('.oxd-select-text-input');
this.fluency = page .locator('.oxd-input-group').filter({ hasText: 'Fluency' }).locator('.oxd-select-text-input');
this.competency = page .locator('.oxd-input-group').filter({ hasText: 'Competency' }).locator('.oxd-select-text-input');
this.languageComment = page.locator('form').filter({ hasText: 'Language' }).locator('textarea');
this.languageSaveButton = page.locator('form').filter({ hasText: 'Language' }).getByRole('button',{name: 'Save'});
//license
this.addLicenseButton = page.locator('.orangehrm-action-header').filter({hasText: 'License'}).getByRole('button', {name: "Add"});
this.licenseType = page .locator('.oxd-input-group').filter({ hasText: 'License Type' }).locator('.oxd-select-text-input');
this.licenseNumber = page .locator('.oxd-input-group').filter({ hasText: 'License Number' }).locator('input');
this.issuedDate = page .locator('.oxd-input-group').filter({ hasText: 'Issued Date' }).locator('input');
this.expiryDate =page .locator('.oxd-input-group').filter({ hasText: 'Expiry Date' }).locator('input');
this.licenseSaveButton = page.locator('form').filter({ hasText: 'License Type' }).getByRole('button',{name: 'Save'});
    }

async addExperience(data: Experience){
    await this.click(this.addExperienceButton);
    await this.fill(this.company, data.company);
    await this.fill(this.jobTitle, data.jobTitle);
    await this.fill(this.fromDate, data.from);
    await this.fill(this.toDate, data.to);
    await this.fill(this.experienceComment, data.comment)
    await this.click(this.saveExperienceButton);
}

async addEducation(data: Education){
    await this.click(this.addEducationButton);
    await this.pressSequentially(this.level, data.level);
    await this.selectDropdown.getByRole('option', {name: data.level, exact: true}).click();
    await this.fill(this.institute, data.institute);
    await this.fill(this.majorSpecialization,data.majorSpecialization);
    await this.fill(this.year, data.year);
    await this.fill(this.gpaScore, data.gpaScore);
    await this.fill(this.startDate, data.startDate);
    await this.fill(this.endDate, data.endDate);
    await this.click(this.saveEducationButton);
}

async addSkill(data: Skills){
    await this.click(this.addSkillButton);
    await this.click(this.skill);
    await this.pressSequentially(this.skill, data.skill);
    await this.selectDropdown.getByRole('option', {name: data.skill, exact: true}).click();
    await this.fill(this.yearsOfExperience, data.yearsOfExperience);
    await this.fill(this.skillsComment, data.commentSkills);
    await this.click(this.skillsSaveButton);
}

async addLanguage(data: Language){
    await this.click(this.addLanguageButton);
    await this.click(this.language);
    await this.pressSequentially(this.language, data.language);
    await this.selectDropdown.getByRole('option', {name:data.language, exact:true}).click();
    await this.pressSequentially(this.fluency, data.fluency);
    await this.selectDropdown.getByRole('option',{name: data.fluency, exact: true}).click();
    await this.pressSequentially(this.competency, data.competency);
    await this.selectDropdown.getByRole('option', {name: data.competency, exact:true}).click();
    await this.fill(this.languageComment, data.commentLanguage);
    await this.click(this.languageSaveButton);
}

async addLicense(data: License){
    await this.click(this.addLicenseButton);
    await this.pressSequentially(this.licenseType, data.licenseType);
    await this.selectDropdown.getByRole('option', {name: data.licenseType, exact:true}).click();
    await this.fill(this.licenseNumber, data.licenseNumber);
    await this.fill(this.issuedDate, data.issuedDate);
    await this.fill(this.expiryDate, data.expiryDate);
    await this.click(this.licenseSaveButton);
}


}