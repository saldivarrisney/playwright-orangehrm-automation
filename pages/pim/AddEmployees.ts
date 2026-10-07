import { Page, Locator} from "@playwright/test";
import { BasePage } from "../BasePage";
import {CreateEmployee} from "../../types/PIM/AddEmployees";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";
import { OpenSource_HeadersAndTitle } from "../../components/OpenSource_TitleAndHeader";

export class CreationOfEmployee extends BasePage{
readonly formLoader: OpenSource_FormLoader;
readonly titleHeader: OpenSource_HeadersAndTitle;
private readonly firstName: Locator
private readonly middleName: Locator
private readonly lastName: Locator
private readonly employeeId: Locator
private readonly profilePic: Locator
private readonly addEmployeeButton: Locator
private readonly saveButton: Locator
private readonly addButton: Locator
private readonly employeeListButton: Locator

    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.titleHeader = new OpenSource_HeadersAndTitle(page);
this.firstName = page.getByPlaceholder("First Name");
this.middleName = page.getByPlaceholder("Middle Name");
this.lastName = page.getByPlaceholder("Last Name");
this.employeeId = page.locator('.oxd-input-group').filter({hasText: 'Employee Id'}).locator('input');
this.profilePic = page.locator('.oxd-input-group').locator('input[type="file"]');
this.addEmployeeButton = page.locator('.oxd-topbar-body-nav-tab').filter({hasText: 'Add Employee'});
this.employeeListButton = page.locator('.oxd-topbar-body-nav-tab').filter({hasText: 'Employee List'});
this.saveButton= page.locator('form').filter({hasText: "Employee Full Name"}).getByRole("button",{name: "Save"});
this.addButton = page.locator('.oxd-button').filter({hasText: 'Add'});


    }
    async addEmployee_createEmployee(data: CreateEmployee){
        await this.waitForVisible(this.addEmployeeButton);
        await this.click(this.addEmployeeButton);
        await this.waitForVisible(this.firstName);
        await this.fill(this.firstName, data.firstName);
        await this.fill(this.middleName, data.middleName);
        await this.fill(this.lastName, data.lastName);
        await this.fill(this.employeeId, data.employeeId);
        await this.setInputFile(this.profilePic, data.profilePic);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader);
        await this.click(this.saveButton);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
   const employeeName = this.page.getByRole('heading', {level: 6, name: `${data.firstName} ${data.lastName}`,});
     // can also be  // const employeeName = this.page.getByRole('heading', { level: 6, name: data.firstName + ' ' + data.lastName });
        await this.waitForVisible(employeeName);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 

    }
    
    async employeeList_createEmployee(data: CreateEmployee){
        await this.click(this.employeeListButton);
        await this.waitForVisible(this.addButton);
        await this.click(this.addButton);
        await this.waitForVisible(this.firstName);
        await this.fill(this.firstName, data.firstName);
        await this.fill(this.middleName, data.middleName);
        await this.fill(this.lastName, data.lastName);
        await this.fill(this.employeeId, data.employeeId);
        await this.setInputFile(this.profilePic, data.profilePic);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
        await this.click(this.saveButton);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
   const employeeName = this.page.getByRole('heading', {level: 6, name: `${data.firstName} ${data.lastName}`,});
     // can also be  // const employeeName = this.page.getByRole('heading', { level: 6, name: data.firstName + ' ' + data.lastName });
        await this.waitForVisible(employeeName);

    }
verifyCreatedEmployee(firstName: string, lastName: string): Locator{
    return this.page.getByRole('heading', {level: 6, name: `${firstName} ${lastName}`,});
}
}