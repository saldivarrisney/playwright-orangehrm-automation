import { Page, Locator} from "@playwright/test";
import { MyInfoDependents } from "../../types/MyInfo/Dependents";
import { BasePage } from "../BasePage";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";


export class MyInfoDependentsTab extends BasePage {
readonly formLoader: OpenSource_FormLoader;
readonly formLoaderToDisappear: OpenSource_FormLoader;
private readonly addDependentHeader: Locator
private readonly addDependentButton: Locator
private readonly name: Locator
private readonly relationship: Locator
private readonly selectDropdown: Locator
private readonly birthdate: Locator
private readonly saveDependentButton: Locator 



    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.formLoaderToDisappear = new OpenSource_FormLoader(page);
this.addDependentHeader = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Dependents'});
this.addDependentButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Dependents'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('.oxd-select-text-input');
this.birthdate = page .locator('.oxd-input-group').filter({ hasText: 'Date of Birth' }).locator('input');
this.saveDependentButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});

}
async addDependents(data: MyInfoDependents){
    await this.waitForVisible(this.addDependentHeader);
    await this.click(this.addDependentButton);
    await this.waitForVisible(this.name);
    await this.fill(this.name, data.name);
    await this.click(this.relationship);
    await this.pressSequentially(this.relationship, data.relationship);
    const relationshipOption= this.selectDropdown.getByRole('option', {name: data.relationship, exact:true});
    await this.waitForVisible(relationshipOption);
    await this.click(relationshipOption);
    await this.fill(this.birthdate, data.dateOfBirth);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
    await this.click(this.saveDependentButton);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
    await this.waitUntilHidden(this.saveDependentButton);

}

verifyTheDependents(name: string){//returning 1 record only
      return  this.page.getByRole("row").filter({ has:this.page.getByRole("cell", {name: name, exact: true})});

}
}



