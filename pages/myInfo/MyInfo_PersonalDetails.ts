import { Page, Locator, expect} from "@playwright/test";
import { MyInfoPersonalAndContact_AttachFile, MyInfoPersonalDetails_CustomFields, MyInfoPersonalDetails } from "../../types/MyInfo/MyInfo_PersonalDetails";

export class MyInfoPersonalDetailsTab{
readonly page: Page

readonly filtergrid: Locator

readonly firstName: Locator
readonly middleName: Locator
readonly lastName: Locator
readonly employeeId: Locator
readonly otherId: Locator
readonly driverLicense: Locator
readonly licenseExpiry: Locator
readonly nationalityFilter: Locator
readonly maritalFilter: Locator
readonly selectDropdown: Locator
readonly dateBirth: Locator
readonly personalDetailsSaveButton: Locator
readonly bloodType: Locator
readonly testField: Locator
readonly customFieldsSaveButton: Locator
readonly addButton: Locator
readonly attachment: Locator
readonly comment: Locator
readonly AttachmentSaveButton: Locator
readonly tabRole: Locator

    constructor(page: Page){
this.page = page;
this.filtergrid = page.getByPlaceholder("Search");
this.firstName = page.getByPlaceholder("First Name");
this.middleName = page.getByPlaceholder("Middle Name");
this.lastName= page.getByPlaceholder("Last Name");
this.personalDetailsSaveButton = page.locator('form').filter({ hasText: 'Employee Full Name' }).getByRole('button',{name: 'Save'});
this.employeeId = page .locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
this.otherId = page .locator('.oxd-input-group').filter({ hasText: 'Other Id' }).locator('input');
this.driverLicense = page .locator('.oxd-input-group').filter({ hasText: 'License Number' }).locator('input');
this.licenseExpiry = page .locator('.oxd-input-group').filter({ hasText: 'License Expiry Date' }).locator('input');
this.dateBirth = page .locator('.oxd-input-group').filter({ hasText: 'Date of' }).locator('input');
this.nationalityFilter = page .locator('.oxd-input-group').filter({ hasText: 'Nationality' }).locator('.oxd-select-text-input');
this.maritalFilter = page .locator('.oxd-input-group').filter({ hasText: 'Marital Status' }).locator('.oxd-select-text-input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.bloodType = page .locator('.oxd-input-group').filter({ hasText: 'Blood Type' }).locator('.oxd-select-text-input');
this.testField = page .locator('.oxd-input-group').filter({ hasText: 'Test_Field' }).locator('input');
this.customFieldsSaveButton = page.locator('form').filter({ hasText: 'Blood' }).getByRole('button',{name: 'Save'});
this.addButton = page.getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.AttachmentSaveButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});
this.tabRole =page.locator('.orangehrm-tabs');

}


async updatePersonalDetails(data:MyInfoPersonalDetails){
    await this.tabRole.getByRole('tab', {name: data.personalDetailsTab}).click();
    await this.firstName.click();
    await this.firstName.fill(data.firstName);
    await this.middleName.fill(data.middleName);
    await this.lastName.fill(data.lastName);
    await this.employeeId.fill(data.employeeId);
    await this.otherId.fill(data.otherId);
    await this.driverLicense.fill(data.driverLicenseNumber);
    await this.licenseExpiry.fill(data.licenseExpiryDate);
    await this.nationalityFilter.pressSequentially(data.nationality);
    await this.selectDropdown.getByRole('option', {name: data.nationality,exact: true }).click();
    await this.maritalFilter.pressSequentially(data.maritalStatus);
    await this.selectDropdown.getByRole('option', {name: data.maritalStatus,exact: true }).click();
    await this.dateBirth.fill(data.dateBirth);
    await this.personalDetailsSaveButton.click();
}
async updateCustomFields(data:MyInfoPersonalDetails_CustomFields){
    await this.bloodType.pressSequentially(data.bloodType)
    await this.selectDropdown.getByRole('option', {name: data.bloodType,exact: true }).click();
    await this.testField.fill(data.testField)
    await this.customFieldsSaveButton.click();
}
async addAttachment(data:MyInfoPersonalAndContact_AttachFile){
    await this.addButton.click();
    await this.attachment.setInputFiles(data.attachmentPersonalDetails);
    await this.comment.fill(data.commentPersonalDetails);
    await this.AttachmentSaveButton.click();

}


    }