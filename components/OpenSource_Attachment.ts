import { Page, Locator} from "@playwright/test";
import { AttachmentFields } from "../types/Components/OpenSource_Components";

export class OpenSource_Attachment {
readonly page: Page
readonly uploadAttachment: Locator
readonly comment: Locator
readonly saveAttachmentButton: Locator
readonly attachmentFileField: Locator


constructor(page: Page){
this.page = page;
this.uploadAttachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.saveAttachmentButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});
this.attachmentFileField= page.locator('.oxd-input-group').locator('.oxd-file-input')
    }


async addAttachment(data:AttachmentFields){
    const addAttachmentButton = this.page.locator('.orangehrm-action-header').filter({hasText: 'Attachment'}).getByRole('button', {name: "Add"});
            await addAttachmentButton.click();
            await this.uploadAttachment.setInputFiles(data.attachmentFile);
    await this.comment.fill(data.attachmentComment);
    await this.saveAttachmentButton.click(); 
}
} 