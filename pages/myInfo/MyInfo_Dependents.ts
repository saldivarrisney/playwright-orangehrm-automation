import { Page, Locator} from "@playwright/test";
import { MyInfoDependents } from "../../types/MyInfo/MyInfo_Dependents";
import { BasePage } from "../BasePage";


export class MyInfoDependentsTab extends BasePage {
private readonly addDependentButton: Locator
private readonly name: Locator
private readonly relationship: Locator
private readonly selectDropdown: Locator
private readonly birthdate: Locator
private readonly saveDependentButton: Locator 



    constructor(page: Page){
super(page);
this.addDependentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Dependents'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('.oxd-select-text-input');
this.birthdate = page .locator('.oxd-input-group').filter({ hasText: 'Date of Birth' }).locator('input');
this.saveDependentButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});

}
async addDependents(data: MyInfoDependents){
    await this.click(this.addDependentButton);
    await this.click(this.name);
    await this.fill(this.name, data.name);
    await this.pressSequentially(this.relationship, data.relationship);
    await this.selectDropdown.getByRole('option', {name: data.relationship, exact:true}).click();
    await this.fill(this.birthdate, data.dateOfBirth);
    await this.click(this.saveDependentButton);
}

}