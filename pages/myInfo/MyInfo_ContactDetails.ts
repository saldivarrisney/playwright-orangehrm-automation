import { Page, Locator} from "@playwright/test";
import { MyInfoContactDetails } from "../../types/MyInfo/ContactDetails";
import { BasePage } from "../BasePage";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";

export class MyInfoContactDetailsTab extends BasePage{
readonly formLoader: OpenSource_FormLoader;
private readonly street1: Locator
private readonly street2: Locator
private readonly city: Locator
private readonly stateProvince: Locator
private readonly zipPostalCode: Locator
private readonly countryFilter: Locator
private readonly home: Locator
private readonly mobile: Locator
private readonly work: Locator
private readonly workEmail: Locator
private readonly otherEmail: Locator
private readonly saveContactDetailsButton: Locator
private readonly selectDropdown: Locator



    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.street1 = page .locator('.oxd-input-group').filter({ hasText: 'Street 1' }).locator('input');
this.street2 = page .locator('.oxd-input-group').filter({ hasText: 'Street 2' }).locator('input');
this.city = page .locator('.oxd-input-group').filter({ hasText: 'City' }).locator('input');
this.stateProvince = page .locator('.oxd-input-group').filter({ hasText: 'State/Province' }).locator('input');
this.zipPostalCode = page .locator('.oxd-input-group').filter({ hasText: 'Zip/Postal Code' }).locator('input');
this.countryFilter = page .locator('.oxd-input-group').filter({ hasText: 'Country' }).locator('.oxd-select-text-input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.home = page .locator('.oxd-input-group').filter({ hasText: 'Home' }).locator('input');
this.mobile = page .locator('.oxd-input-group').filter({ hasText: 'Mobile' }).locator('input');
this.work = page .locator('.oxd-input-group').filter({ hasText: /^Work$/ }).locator('input');
this.workEmail = page .locator('.oxd-input-group').filter({ hasText: 'Work Email'}).locator('input');
this.otherEmail = page .locator('.oxd-input-group').filter({ hasText: 'Other Email' }).locator('input');
this.saveContactDetailsButton = page.locator('form').filter({ hasText: 'Address' }).getByRole('button',{name: 'Save'});

}
async updateContactDetails(data: MyInfoContactDetails){
    await this.click(this.street1);
    await this.fill(this.street1, data.street1);
    await this.fill(this.street2, data.street2);
    await this.fill(this.city, data.city);
    await this.fill(this.stateProvince, data.stateProvince);
    await this.fill(this.zipPostalCode, data.zipPostal);
    await this.click(this.countryFilter);
    await this.pressSequentially(this.countryFilter, data.country);
    const countryOption = this.selectDropdown.getByRole('option', { name: data.country,exact: true});
    await this.waitForVisible(countryOption);
    await this.click(countryOption);
    await this.fill(this.home, data.home);
    await this.fill(this.mobile, data.mobile);
    await this.fill(this.work, data.work);
    await this.fill(this.workEmail, data.workEmail);
    await this.fill(this.otherEmail, data.otherEmail);
    await this.click(this.saveContactDetailsButton);
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader);

}
getContactDetailsFields() {//returning more than 1 records from different locators
    return {street1: this.street1, street2: this.street2, 
        city: this.city,stateProvince: this.stateProvince};
                // 'street1' = give key/name to access the locator
                // this.street1 = the locator
}
}