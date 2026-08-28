import { Page, Locator} from "@playwright/test";
import { MyInfoMembership } from "../../types/MyInfo/MyInfo_Membership";

export class MyInfoMembershipTab {
readonly page: Page
readonly membership: Locator
readonly addMembershipButton: Locator
readonly subscriptionPaidBy: Locator
readonly subscriptionAmount: Locator
readonly currency: Locator
readonly subscriptionCommenceDate: Locator
readonly subscriptionRenewalDate: Locator
readonly saveMembershipButton: Locator
readonly selectDropdown: Locator
readonly attachmentAddButton: Locator
readonly attachment: Locator
readonly attachmentComment: Locator
readonly attachmentSaveButton: Locator

    constructor(page: Page){

this.page = page;
this.addMembershipButton = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Memberships'}).getByRole('button', {name: "Add"});
this.membership = page .locator('.oxd-input-group').filter({ hasText: 'Membership' }).locator('.oxd-select-text-input');
this.selectDropdown= page.getByRole('listbox');
this.subscriptionPaidBy = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Paid By' }).locator('.oxd-select-text-input');
this.subscriptionAmount = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Amount' }).locator('input');
this.currency = page .locator('.oxd-input-group').filter({ hasText: 'Currency' }).locator('.oxd-select-text-input');
this.subscriptionCommenceDate = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Commence Date' }).locator('input');
this.subscriptionRenewalDate = page .locator('.oxd-input-group').filter({ hasText: 'Subscription Renewal Date' }).locator('input');
this.saveMembershipButton = page.locator('form').filter({ hasText: 'Membership' }).getByRole('button',{name: 'Save'});
this.attachmentAddButton = page.locator('.orangehrm-action-header').filter({hasText: 'Attachments'}).getByRole('button', {name: "Add"});
this.attachment = page.locator('input[type="file"]');
this.attachmentComment = page.getByPlaceholder("Type comment here");
this.attachmentSaveButton = page.locator('form').filter({ hasText: 'Select File' }).getByRole('button',{name: 'Save'});

}
async addMembership(data: MyInfoMembership){
    await this.addMembershipButton.click();
    await this.membership.pressSequentially(data.membership);
    await this.selectDropdown.getByRole('option', {name: data.membership}).click();
    await this.subscriptionPaidBy.pressSequentially(data.subscriptionPaidBy);
    await this.selectDropdown.getByRole('option', {name: data.subscriptionPaidBy}).click();
    await this.subscriptionAmount.fill(data.subscriptionAmount);
    await this.currency.pressSequentially(data.currency);
    await this.selectDropdown.getByRole('option', {name: data.currency}).click();  
    await this.subscriptionCommenceDate.fill(data.subscriptionCommenceDate);
    await this.subscriptionRenewalDate.fill(data.subscriptionRenewalDate);
    await this.saveMembershipButton.click();

}
}