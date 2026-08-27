import { Page, Locator, expect} from "@playwright/test";
import { MyInfoImmigration, MyInfoImmigrations_AttachFile } from "../../types/MyInfo/MyInfo_Immigration";


export class MyInfoImmigrationsTab {
readonly page: Page
readonly tabRole: Locator
readonly document: Locator
readonly addImmigrationButton: Locator
readonly number: Locator
readonly issuedDate: Locator
readonly expiryDate: Locator
readonly eligibleStatus: Locator
readonly selectDropdown: Locator
readonly issuedBy: Locator
readonly eligibleReviewDate: Locator
readonly comments: Locator
readonly saveImmigrationButton: Locator
readonly attachmentAddButton: Locator
readonly attachment: Locator
readonly attachmentComment: Locator
readonly attachmentSaveButton: Locator

    constructor(page: Page){

this.page = page;
this.tabRole =page.locator('.orangehrm-tabs');
this.addImmigrationButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Immigration Records'}).getByRole('button', {name: "Add"});
this.document =page.locator('.oxd-input-group');
this.number = page .locator('.oxd-input-group').filter({ hasText: 'Number' }).locator('input');
this.issuedDate =page.locator('.oxd-input-group').filter({ hasText: 'Issued Date' }).locator('input');
this.expiryDate = page .locator('.oxd-input-group').filter({ hasText: 'Expiry Date' }).locator('input');
this.eligibleStatus = page .locator('.oxd-input-group').filter({ hasText: 'Eligible Status' }).locator('input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.issuedBy = page .locator('.oxd-input-group').filter({ hasText: 'Issued By' }).locator('.oxd-select-text-input');
this.eligibleReviewDate = page .locator('.oxd-input-group').filter({ hasText: 'Eligible Review Date' }).locator('input');
this.comments = page .locator('.oxd-input-group').filter({ hasText: 'Comments' }).locator('textarea');
this.saveImmigrationButton = page.locator('form').filter({ hasText: 'Document' }).getByRole('button',{name: 'Save'});
this.attachmentAddButton = page.locator('.orangehrm-action-header').filter({hasText: 'Attachments'}).getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.attachmentComment = page.getByPlaceholder("Type comment here");
this.attachmentSaveButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});

}
async addImmigration(data: MyInfoImmigration){
    await this.tabRole.getByRole('tab', {name:data.immigration}).click();
    await this.addImmigrationButton.click();
    const documentId = this.document.filter({hasText: new RegExp(`^${data.document}$`)}).locator('.oxd-radio-input');
    await documentId.setChecked(true);
    await this.number.click();
    await this.number.fill(data.number);
    await this.issuedDate.fill(data.issuedDate);
    await this.expiryDate.fill(data.expiryDate);
    await this.eligibleStatus.fill(data.eligibleStatus);
    await this.issuedBy.pressSequentially(data.issuedBy);
    await this.selectDropdown.getByRole('option', {name: data.issuedBy, exact:true}).click();
    await this.eligibleReviewDate.fill(data.eligibleReviewDate);
    await this.comments.fill(data.comments);
    await this.saveImmigrationButton.click();
    
}

 async addAttachment(data:MyInfoImmigrations_AttachFile){
    await this.attachmentAddButton.click();
    await this.attachment.setInputFiles(data.attachmentImmigrations);
    await this.attachmentComment.fill(data.commentImmigrations);
    await this.attachmentSaveButton.click();
}
}