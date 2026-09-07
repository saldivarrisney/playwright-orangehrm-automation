import { Page, Locator} from "@playwright/test";
import {MyInfoPersonalDetails_CustomFields, MyInfoPersonalDetails } from "../../types/MyInfo/PersonalDetails";
import { BasePage } from "../BasePage";


export class MyInfoPersonalDetailsTab extends BasePage{
private readonly firstName: Locator
private readonly middleName: Locator
private readonly lastName: Locator
private readonly employeeId: Locator
private readonly otherId: Locator
private readonly driverLicense: Locator
private readonly licenseExpiry: Locator
private readonly nationalityFilter: Locator
private readonly maritalFilter: Locator
private readonly selectDropdown: Locator
private readonly dateBirth: Locator
private readonly personalDetailsSaveButton: Locator
private readonly bloodType: Locator
private readonly testField: Locator
private readonly customFieldsSaveButton: Locator


    constructor(page: Page){
super(page);
this.firstName = page.getByPlaceholder("First Name");
this.middleName = page.getByPlaceholder("Middle Name");
this.lastName= page.getByPlaceholder("Last Name");
this.personalDetailsSaveButton = page.locator('form').filter({ hasText: 'Employee Full Name' }).getByRole('button',{name: 'Save'});
this.employeeId = page .locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
this.otherId = page .locator('.oxd-input-group').filter({ hasText: 'Other Id' }).locator('input');
this.driverLicense = page .locator('.oxd-input-group').filter({ hasText: 'License Number' }).locator('input');
this.licenseExpiry = page .locator('.oxd-input-group').filter({ hasText: 'License Expiry Date' }).locator('input');
this.dateBirth = page .locator('.oxd-input-group').filter({ hasText: 'Date of' }).locator('input');
this.nationalityFilter = page .locator('.oxd-input-group').filter({ hasText: 'Nationality' }).locator('.oxd-select-text-input');
this.maritalFilter = page .locator('.oxd-input-group').filter({ hasText: 'Marital Status' }).locator('.oxd-select-text-input');
this.selectDropdown =page.locator('.oxd-input-group').getByRole('listbox');
this.bloodType = page .locator('.oxd-input-group').filter({ hasText: 'Blood Type' }).locator('.oxd-select-text-input');
this.testField = page .locator('.oxd-input-group').filter({ hasText: 'Test_Field' }).locator('input');
this.customFieldsSaveButton = page.locator('form').filter({ hasText: 'Blood' }).getByRole('button',{name: 'Save'});

}

async updatePersonalDetails(data:MyInfoPersonalDetails){
    await this.click(this.firstName);
    await this.fill(this.firstName, data.firstName);
    await this.fill(this.middleName, data.middleName);
    await this.fill(this.lastName, data.lastName);
    await this.fill(this.employeeId, data.employeeId);
    await this.fill(this.otherId, data.otherId);
    await this.fill(this.driverLicense, data.driverLicenseNumber);
    await this.fill(this.licenseExpiry, data.licenseExpiryDate);
    await this.pressSequentially(this.nationalityFilter, data.nationality);
    await this.selectDropdown.getByRole('option', {name: data.nationality,exact: true }).click();
    await this.pressSequentially(this.maritalFilter, data.maritalStatus);
    await this.selectDropdown.getByRole('option', {name: data.maritalStatus,exact: true }).click();
    await this.fill(this.dateBirth, data.dateBirth);
    await this.click(this.personalDetailsSaveButton);
}
async updateCustomFields(data:MyInfoPersonalDetails_CustomFields){
    await this.pressSequentially(this.bloodType, data.bloodType)
    await this.selectDropdown.getByRole('option', {name: data.bloodType,exact: true }).click();
    await this.fill(this.testField, data.testField)
    await this.click(this.customFieldsSaveButton);
}


    }