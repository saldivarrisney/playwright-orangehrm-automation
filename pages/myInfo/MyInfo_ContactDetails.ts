import { Page, Locator, expect} from "@playwright/test";
import { MyInfoContactDetails, MyInfoContactDetails_AttachFile } from "../../types/MyInfo/MyInfo_ContactDetails";

export class MyInfoContactDetailsTab {
readonly page: Page
readonly tabRole: Locator
readonly street1: Locator
readonly street2: Locator
readonly city: Locator
readonly stateProvince: Locator
readonly zipPostalCode: Locator
readonly countryFilter: Locator
readonly home: Locator
readonly mobile: Locator
readonly work: Locator
readonly workEmail: Locator
readonly otherEmail: Locator
readonly saveContactDetailsButton: Locator
readonly selectDropdown: Locator
readonly addButton: Locator
readonly attachment: Locator
readonly comment: Locator
readonly saveAttachmentButton: Locator


    constructor(page: Page){
this.page = page;
this.tabRole =page.locator('.orangehrm-tabs');
this.street1 = page .locator('.oxd-input-group').filter({ hasText: 'Street 1' }).locator('input');
this.street2 = page .locator('.oxd-input-group').filter({ hasText: 'Street 2' }).locator('input');
this.city = page .locator('.oxd-input-group').filter({ hasText: 'City' }).locator('input');
this.stateProvince = page .locator('.oxd-input-group').filter({ hasText: 'State/Province' }).locator('input');
this.zipPostalCode = page .locator('.oxd-input-group').filter({ hasText: 'Zip/Postal Code' }).locator('input');
this.countryFilter = page .locator('.oxd-input-group').filter({ hasText: 'Country' }).locator('.oxd-select-text-input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.home = page .locator('.oxd-input-group').filter({ hasText: 'Home' }).locator('input');
this.mobile = page .locator('.oxd-input-group').filter({ hasText: 'Mobile' }).locator('input');
this.work = page .locator('.oxd-input-group').filter({ hasText: /^Work$/ }).locator('input');
this.workEmail = page .locator('.oxd-input-group').filter({ hasText: 'Work Email'}).locator('input');
this.otherEmail = page .locator('.oxd-input-group').filter({ hasText: 'Other Email' }).locator('input');
this.saveContactDetailsButton = page.locator('form').filter({ hasText: 'Address' }).getByRole('button',{name: 'Save'});
this.addButton = page.getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.saveAttachmentButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});

}
async updateContactDetails(data: MyInfoContactDetails){
    await this.tabRole.getByRole('tab', {name:data.contactDetails}).click();
    await this.street1.click();
    await this.street1.fill(data.street1);
    await this.street2.fill(data.street2);
    await this.city.fill(data.city);
    await this.stateProvince.fill(data.stateProvince);
    await this.zipPostalCode.fill(data.zipCostal);
    await this.countryFilter.pressSequentially(data.country);
    await this.selectDropdown.getByRole('option', {name: data.country,exact: true }).click();
    await this.home.fill(data.home);
    await this.mobile.fill(data.mobile);
    await this.workEmail.fill(data.workEmail);
    await this.otherEmail.fill(data.otherEmail);
    await this.saveContactDetailsButton.click();
}
async addAttachment(data:MyInfoContactDetails_AttachFile){
    await this.addButton.click();
    await this.attachment.setInputFiles(data.attachmentContactDetails);
    await this.comment.fill(data.commentContactDetails);
    await this.saveAttachmentButton.click();
}
}