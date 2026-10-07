import { Page, Locator} from "@playwright/test";
import { MyInfoMemberships } from "../../types/MyInfo/Memberships";
import { BasePage } from "../BasePage";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";

export class MyInfoMembershipTab extends BasePage{
readonly formLoader: OpenSource_FormLoader;
readonly formLoaderToDisappear: OpenSource_FormLoader;
private readonly membership: Locator
private readonly addMembershipButton: Locator
private readonly subscriptionPaidBy: Locator
private readonly subscriptionAmount: Locator
private readonly currency: Locator
private readonly subscriptionCommenceDate: Locator
private readonly subscriptionRenewalDate: Locator
private readonly saveMembershipButton: Locator
private readonly selectDropdown: Locator
private readonly addMembershipHeader: Locator


    constructor(page: Page){

super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.formLoaderToDisappear = new OpenSource_FormLoader(page);
this.addMembershipHeader = page.locator('.orangehrm-action-header').filter({hasText: 'Assigned Memberships'});
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
async addMembership(data: MyInfoMemberships){
    await this.waitForVisible(this.addMembershipHeader);
    await this.click(this.addMembershipButton);
    await this.waitForVisible(this.membership);
    await this.pressSequentially(this.membership, data.membership);
    const membershipOption = this.selectDropdown.getByRole('option', {name: data.membership});
    await this.waitForVisible(membershipOption);
    await this.click(membershipOption);
    await this.click(this.subscriptionPaidBy);
    await this.pressSequentially(this.subscriptionPaidBy, data.subscriptionPaidBy);
    const subscriptionPaidByOption = this.selectDropdown.getByRole('option', {name: data.subscriptionPaidBy});
    await this.waitForVisible(subscriptionPaidByOption);
    await this.click(subscriptionPaidByOption);
    await this.fill(this.subscriptionAmount, data.subscriptionAmount);
    await this.click(this.currency);
    await this.pressSequentially(this.currency,data.currency);
    const currencyOption = this.selectDropdown.getByRole('option', {name: data.currency});
    await this.waitForVisible(currencyOption)
    await this.click(currencyOption)
    await this.fill(this.subscriptionCommenceDate, data.subscriptionCommenceDate);
    await this.fill(this.subscriptionRenewalDate, data.subscriptionRenewalDate);
    await this.waitUntilHidden(this.formLoader.formLoader);
    await this.click(this.saveMembershipButton);
    await this.waitForFormLoaderToDisappear(this.formLoaderToDisappear.formLoaderToDisappear);

}
    verifyTheMembership(membership: string){
        return  this.page.getByRole("row").filter({ hasText: membership });
}
}