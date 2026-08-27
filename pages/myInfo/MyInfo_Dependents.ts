import { Page, Locator} from "@playwright/test";
import { MyInfoDependents, MyInfoDependents_AttachFile } from "../../types/MyInfo/MyInfo_Dependents";


export class MyInfoDependentsTab {
readonly page: Page
readonly tabRole: Locator
readonly addDependentButton: Locator
readonly name: Locator
readonly relationship: Locator
readonly selectDropdown: Locator
readonly birthdate: Locator
readonly saveDependentButton: Locator
readonly addAttachmentButton: Locator
readonly attachment: Locator
readonly comment: Locator
readonly saveAttachmentButton: Locator


    constructor(page: Page){
this.page = page;
this.tabRole =page.locator('.orangehrm-tabs');
this.addDependentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Dependents'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('.oxd-select-text-input');
this.birthdate = page .locator('.oxd-input-group').filter({ hasText: 'Date of Birth' }).locator('input');
this.saveDependentButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});
this.addAttachmentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Attachments'}).getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.saveAttachmentButton= page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});

}
async updateDepedents(data: MyInfoDependents){
    await this.tabRole.getByRole('tab', {name:data.dependents}).click();
    await this.addDependentButton.click();
    await this.name.click();
    await this.name.fill(data.name);
    await this.relationship.pressSequentially(data.relationship);
    await this.selectDropdown.getByRole('option', {name: data.relationship, exact:true}).click();
    await this.birthdate.fill(data.dateOfBirth);
    await this.saveDependentButton.click();
}

 async addAttachment(data:MyInfoDependents_AttachFile){
    await this.addAttachmentButton.click();
    await this.attachment.setInputFiles(data.attachmentDependents);
    await this.comment.fill(data.commentDependents);
    await this.saveAttachmentButton.click();
}
}