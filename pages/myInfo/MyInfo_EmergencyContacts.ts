import { Page, Locator} from "@playwright/test";
import { MyInfoEmergencyContacts} from "../../types/MyInfo/EmergencyContacts";
import { BasePage } from "../BasePage";

export class MyInfoEmergencyContactsTab extends BasePage {
private readonly addEmergencyContactButton: Locator
private readonly name: Locator
private readonly relationship: Locator
private readonly homeTelephone: Locator
private readonly mobile: Locator
private readonly workTelephone: Locator
private readonly saveEmergencyContactsButton: Locator



    constructor(page: Page){
super(page);
this.addEmergencyContactButton = page.locator('.orangehrm-action-header').filter({hasText: 'Emergency Contact'}).getByRole('button', {name: "Add"});
this.name = page .locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
this.relationship = page .locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('input');
this.homeTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Home Telephone' }).locator('input');
this.mobile = page .locator('.oxd-input-group').filter({ hasText: 'Mobile' }).locator('input');
this.workTelephone = page .locator('.oxd-input-group').filter({ hasText: 'Work Telephone' }).locator('input');
this.saveEmergencyContactsButton = page.locator('form').filter({ hasText: 'Name' }).getByRole('button',{name: 'Save'});


}
async addEmergencyContacts(data: MyInfoEmergencyContacts){
    await this.click(this.addEmergencyContactButton);
    await this.click(this.name);
    await this.fill(this.name, data.name);
    await this.fill(this.relationship, data.relationship);
    await this.fill(this.homeTelephone, data.homeTelephone);
    await this.fill(this.mobile, data.mobile);
    await this.fill(this.workTelephone, data.workTelephone);
    await this.click(this.saveEmergencyContactsButton);

}

}