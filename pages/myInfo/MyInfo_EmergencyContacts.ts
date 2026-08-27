import { Page, Locator, expect} from "@playwright/test";
import { MyInfoEmergencyContacts, MyInfoEmergencyContacts_AttachFile} from "../../types/MyInfo/MyInfo_EmergencyContacts";

export class MyInfoEmergencyContactsTab {
readonly page: Page
readonly tabRole: Locator
readonly addEmergencyContactButton: Locator
readonly name: Locator
readonly relationship: Locator
readonly homeTelephone: Locator
readonly mobile: Locator
readonly workTelephone: Locator
readonly saveEmergencyContactsButton: Locator
readonly addAttachmentButton: Locator
readonly attachment: Locator
readonly comment: Locator
readonly saveAttachmentButton: Locator


    constructor(page: Page){
this.page = page;
this.tabRole =page.locator('.orangehrm-tabs');
this.addEmergencyContactButton = page.locator('.orangehrm-action-header').filter({hasText: 'Emergency Contact'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('input');
this.homeTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Home Telephone' }).locator('input');
this.mobile = page .locator('.oxd-input-group').filter({ hasText: 'Mobile' }).locator('input');
this.workTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Work Telephone' }).locator('input');
this.saveEmergencyContactsButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});
this.addAttachmentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Attachments'}).getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.saveAttachmentButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});


}
async updateEmergencyContacts(data: MyInfoEmergencyContacts){
    await this.tabRole.getByRole('tab', {name:data.emergencyContacts}).click();
    await this.addEmergencyContactButton.click();
    await this.name.click();
    await this.name.fill(data.name);
    await this.relationship.fill(data.relationship);
    await this.homeTelephone.fill(data.homeTelephone);
    await this.mobile.fill(data.mobile);
    await this.workTelephone.fill(data.workTelephone);
    await this.saveEmergencyContactsButton.click();

}
 async addAttachment(data:MyInfoEmergencyContacts_AttachFile){
    await this.addAttachmentButton.click();
    await this.attachment.setInputFiles(data.attachmentEmergencyContacts);
    await this.comment.fill(data.commentEmergencyContacts);
    await this.saveAttachmentButton.click();
 }
}