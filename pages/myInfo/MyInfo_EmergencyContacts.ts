import { Page, Locator} from "@playwright/test";
import { MyInfoEmergencyContacts} from "../../types/MyInfo/EmergencyContacts";
import { BasePage } from "../BasePage";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";

export class MyInfoEmergencyContactsTab extends BasePage {
readonly formLoader: OpenSource_FormLoader;
readonly formLoaderToDisappear: OpenSource_FormLoader;
private readonly addEmergencyContactButton: Locator
private readonly name: Locator
private readonly relationship: Locator
private readonly homeTelephone: Locator
private readonly mobile: Locator
private readonly workTelephone: Locator
private readonly saveEmergencyContactsButton: Locator
private readonly addEmergencyContactHeader: Locator



    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.formLoaderToDisappear = new OpenSource_FormLoader(page);
this.addEmergencyContactHeader = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Emergency Contacts'});
this.addEmergencyContactButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Emergency Contacts'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('input');
this.homeTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Home Telephone' }).locator('input');
this.mobile = page .locator('.oxd-input-group').filter({ hasText: 'Mobile' }).locator('input');
this.workTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Work Telephone' }).locator('input');
this.saveEmergencyContactsButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});


}
async addEmergencyContacts(data: MyInfoEmergencyContacts){
    await this.waitForVisible(this.addEmergencyContactHeader);
    await this.click(this.addEmergencyContactButton);
    await this.click(this.name);
    await this.fill(this.name, data.name);
    await this.fill(this.relationship, data.relationship);
    await this.fill(this.homeTelephone, data.homeTelephone);
    await this.fill(this.mobile, data.mobile);
    await this.fill(this.workTelephone, data.workTelephone);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
    await this.click(this.saveEmergencyContactsButton);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);
    await this.waitUntilHidden(this.saveEmergencyContactsButton);

}

verifyTheEmergencyContacts(name: string){
   return  this.page.getByRole("row").filter({ has:this.page.getByRole("cell", {name: name, exact: true})});
}
}