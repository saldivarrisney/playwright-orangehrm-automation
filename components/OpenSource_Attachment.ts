import path from 'path'; //to get the name of the filename
import { Page, Locator} from "@playwright/test";
import { AttachmentFields } from "../types/Components/attachments";
import { OpenSource_FormLoader } from "./OpenSource_FormLoader";
import { BasePage } from "../pages/BasePage";

export class OpenSource_Attachment extends BasePage {
readonly formLoader: OpenSource_FormLoader;
readonly formLoaderToDisappear: OpenSource_FormLoader;
readonly uploadAttachment: Locator
readonly comment: Locator
readonly saveAttachmentButton: Locator
readonly attachmentFileField: Locator


constructor(page: Page){
super(page);
this.formLoaderToDisappear = new OpenSource_FormLoader (page)
this.formLoader = new OpenSource_FormLoader (page)
this.uploadAttachment = page.locator('input[type="file"]');
this.comment = page.getByPlaceholder("Type comment here");
this.saveAttachmentButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});
this.attachmentFileField= page.locator('.oxd-input-group').locator('.oxd-file-input')
    }


async addAttachment(data:AttachmentFields){
    const addAttachmentButton = this.page.locator('.orangehrm-action-header').filter({hasText: 'Attachment'}).getByRole('button', {name: "Add"});
            await this.waitForVisible(addAttachmentButton)
            await addAttachmentButton.click();
            await this.setInputFile(this.uploadAttachment, data.attachmentFile);
            await this.fill(this.comment,data.attachmentComment )
            await this.waitForVisible(this.saveAttachmentButton)
            await this.click(this.saveAttachmentButton); 
        const attachmentLoader= this.page.locator('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-loader')
            await this.waitForFormLoaderToDisappear(attachmentLoader);
            await this.waitUntilHidden(this.saveAttachmentButton);
            await this.waitForFormLoaderToDisappear(attachmentLoader);
}

verifyTheUploadedAttachment(setInputFile: string): Locator {
    const fileName = path.basename(setInputFile); //to show only the name of the file
        return this.page.getByRole('row').filter({ has: this.page.getByRole("cell", {name: fileName, exact: true})});
}
} 