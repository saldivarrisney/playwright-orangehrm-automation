import { Page, Locator} from "@playwright/test";
import { MyInfoMembership } from "../../types/MyInfo/MyInfo_Membership";
import { BasePage } from "../BasePage";

export class MyInfoMembershipTab extends BasePage{
private readonly membership: Locator
private readonly addMembershipButton: Locator
private readonly subscriptionPaidBy: Locator
private readonly subscriptionAmount: Locator
private readonly currency: Locator
private readonly subscriptionCommenceDate: Locator
private readonly subscriptionRenewalDate: Locator
private readonly saveMembershipButton: Locator
private readonly selectDropdown: Locator


    constructor(page: Page){

super(page);
this.addMembershipButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Memberships'}).getByRole('button', {name: "Add"});
this.membership = page .locator('.oxd-input-group').filter({ hasText: 'Membership' }).locator('.oxd-select-text-input');
this.selectDropdown= page.getByRole('listbox');
this.subscriptionPaidBy = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Paid By' }).locator('.oxd-select-text-input');
this.subscriptionAmount = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Amount' }).locator('input');
this.currency = page .locator('.oxd-input-group').filter({ hasText: 'Currency' }).locator('.oxd-select-text-input');
this.subscriptionCommenceDate = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Commence Date' }).locator('input');
this.subscriptionRenewalDate = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Renewal Date' }).locator('input');
this.saveMembershipButton = page.locator('form').filter({ hasText: 'Membership' }).getByRole('button',{name: 'Save'});

}
async addMembership(data: MyInfoMembership){
    await this.click(this.addMembershipButton);
    await this.pressSequentially(this.membership, data.membership);
    await this.selectDropdown.getByRole('option', {name: data.membership}).click();
    await this.pressSequentially(this.subscriptionPaidBy, data.subscriptionPaidBy);
    await this.selectDropdown.getByRole('option', {name: data.subscriptionPaidBy}).click();
    await this.fill(this.subscriptionAmount, data.subscriptionAmount);
    await this.pressSequentially(this.currency,data.currency);
    await this.selectDropdown.getByRole('option', {name: data.currency}).click();  
    await this.fill(this.subscriptionCommenceDate, data.subscriptionCommenceDate);
    await this.fill(this.subscriptionRenewalDate, data.subscriptionRenewalDate);
    await this.click(this.saveMembershipButton);

}
}