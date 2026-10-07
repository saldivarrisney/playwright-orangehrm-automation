import { Page, Locator} from "@playwright/test";
import { BasePage } from "../BasePage";
import { MyInfoImmigrations} from "../../types/MyInfo/Immigrations";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";

export class MyInfoImmigrationsTab extends BasePage{
readonly formLoader: OpenSource_FormLoader;
readonly formLoaderToDisappear: OpenSource_FormLoader;
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
private readonly addImmigrationHeader: Locator


    constructor(page: Page){

super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.formLoaderToDisappear = new OpenSource_FormLoader(page);
this.addImmigrationHeader = page.locator('.orangehrm-action-header').filter({hasText: "Assigned Immigration Records"});
this.addImmigrationButton = page.locator('.orangehrm-action-header').filter({hasText: "Assigned Immigration Records"}).getByRole('button', {name: "Add"});
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
    await this.waitForVisible(this.addImmigrationHeader);
    await this.click(this.addImmigrationButton);
    const documentId = this.document.filter({hasText: new RegExp(`^${data.document}$`)}).locator('.oxd-radio-input');
    await this.waitForVisible(documentId);
    await documentId.setChecked(true);
    await this.fill(this.number, data.number);
    await this.click(this.issuedDate);
    await this.fill(this.issuedDate, data.issuedDate);
    await this.click(this.expiryDate);
    await this.fill(this.expiryDate, data.expiryDate);    
    await this.click(this.eligibleStatus);
    await this.fill(this.eligibleStatus, data.eligibleStatus);
    await this.click(this.issuedBy);
    await this.pressSequentially(this.issuedBy, data.issuedBy);
    const issuedByOption= this.selectDropdown.getByRole('option', {name: data.issuedBy, exact:true});
    await this.waitForVisible(issuedByOption);
    await this.click(issuedByOption)
    await this.click(this.eligibleReviewDate)
    await this.fill(this.eligibleReviewDate, data.eligibleReviewDate);
    await this.fill(this.comments, data.comments);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
    await this.click(this.saveImmigrationButton);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
}
verifyTheImmigration(document:string, number: string){//returning one locator with 2 exact/match records in row-applicable only for 1 grid/row
   return  this.page.getByRole("row").filter({ hasText: document}).filter({ has:this.page.getByRole("cell", {name: number, exact: true})});

}

}