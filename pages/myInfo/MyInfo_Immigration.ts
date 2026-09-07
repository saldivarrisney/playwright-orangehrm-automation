import { Page, Locator} from "@playwright/test";
import { BasePage } from "../BasePage";
import { MyInfoImmigrations} from "../../types/MyInfo/Immigrations";

export class MyInfoImmigrationsTab extends BasePage{
private readonly document: Locator
private readonly addImmigrationButton: Locator
private readonly number: Locator
private readonly issuedDate: Locator
private readonly expiryDate: Locator
private readonly eligibleStatus: Locator
private readonly selectDropdown: Locator
private readonly issuedBy: Locator
private readonly eligibleReviewDate: Locator
private readonly comments: Locator
private readonly saveImmigrationButton: Locator


    constructor(page: Page){

super(page);
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

}
async addImmigration(data: MyInfoImmigrations){
    await this.click(this.addImmigrationButton);
    const documentId = this.document.filter({hasText: new RegExp(`^${data.document}$`)}).locator('.oxd-radio-input');
    await documentId.setChecked(true);
    await this.click(this.number);
    await this.fill(this.number, data.number);
    await this.fill(this.issuedDate, data.issuedDate);
    await this.fill(this.expiryDate, data.expiryDate);
    await this.fill(this.eligibleStatus, data.eligibleStatus);
    await this.pressSequentially(this.issuedBy, data.issuedBy);
    await this.selectDropdown.getByRole('option', {name: data.issuedBy, exact:true}).click();
    await this.fill(this.eligibleReviewDate, data.eligibleReviewDate);
    await this.fill(this.comments, data.comments);
    await this.click(this.saveImmigrationButton);
    
}

}