import {Page, Locator} from "@playwright/test";
import {BasePage} from "../BasePage";
import { UpdateEmployeeData } from "../../types/PIM/Update_Employee";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";
import { OpenSource_HeadersAndTitle } from "../../components/OpenSource_TitleAndHeader";
import { headersTitles } from "../../test-data";
import { CreateEmployee } from "../../types/PIM/AddEmployees";


export class UpdateEmployee_Features extends BasePage{
    readonly formLoader: OpenSource_FormLoader;
    readonly titleHeader: OpenSource_HeadersAndTitle;
    private readonly firstName: Locator
    private readonly middleName: Locator
    private readonly lastName: Locator
    private readonly employeeId: Locator
    private readonly saveButton: Locator
    private readonly nextPageButton: Locator
    private readonly selectHeaderCheckbox: Locator

constructor (page:Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.titleHeader = new OpenSource_HeadersAndTitle(page);
this.firstName = page.getByPlaceholder("First Name");
this.middleName = page.getByPlaceholder("Middle Name");
this.lastName = page.getByPlaceholder("Last Name");
this.employeeId = page.locator('.oxd-input-group').filter({hasText: 'Employee Id'}).locator('input');
this.saveButton= page.locator('form').filter({hasText: "Employee Full Name"}).getByRole("button",{name: "Save"});
this.nextPageButton =page.getByRole("navigation").getByRole("button").locator('.bi-chevron-right');
this.selectHeaderCheckbox= page.locator('.oxd-table-header-cell').locator('.oxd-checkbox-input');

} 
async updateEmployee(data:CreateEmployee, updateData: UpdateEmployeeData){ 
    const employeeRow = this.page.getByRole('row').filter({ hasText: data.employeeId});
    await this.waitForVisible(this.selectHeaderCheckbox);
    while (await employeeRow.count() === 0) {
        if (await this.nextPageButton.count() === 0) {
            throw new Error(`Employee not found: ${data.employeeId}`);
        }
        await this.click(this.nextPageButton);
        await this.waitForVisible(this.selectHeaderCheckbox);
    }
    await employeeRow.locator('.oxd-table-cell-actions').locator('.bi-pencil-fill').click();
    await this.waitForVisible(this.titleHeader.titleHeader(headersTitles.headerPersonalDetails));
    await this.click(this.firstName);
    await this.fill(this.firstName, updateData.firstName);
    await this.fill(this.middleName, updateData.middleName);
    await this.fill(this.lastName, updateData.lastName);
    await this.fill(this.employeeId, updateData.employeeId);
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
    await this.click(this.saveButton);
    await this.reload();
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader);
     const employeeName = this.page.getByRole('heading', {level: 6, name: `${updateData.firstName} ${updateData.lastName}`,});
     // can also be  // const employeeName = this.page.getByRole('heading', { level: 6, name: data.firstName + ' ' + data.lastName });
        await this.waitForVisible(employeeName);
}
verifyUpdatedEmployee(employeeId: string): Locator {
    return this.page.getByRole('row').filter({ hasText: employeeId});
}
}