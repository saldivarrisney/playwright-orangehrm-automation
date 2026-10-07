import { Page, Locator, expect } from "@playwright/test";
import {UpdateUserData, AddUserData} from "../../types/Admin/Users";
import { NavigateCreationOfUser } from "../../types/Components/buttons";
import { BasePage } from "../BasePage";
import { OpenSource_HeadersAndTitle } from "../../components/OpenSource_TitleAndHeader";
import { headersTitles } from "../../test-data";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";


export class AdminFeatures extends BasePage{
    private readonly searchField: Locator
    readonly formLoader: OpenSource_FormLoader;
    readonly titleHeader: OpenSource_HeadersAndTitle;
    private readonly headerUserManagementButton: Locator
    private readonly addUserButton: Locator
    private readonly userRole: Locator
    private readonly employeeName: Locator
    private readonly status: Locator
    private readonly username: Locator
    private readonly password: Locator
    private readonly confirmPassword: Locator
    private readonly saveUserButton: Locator
    private readonly selectDropdown: Locator
    private readonly editButton: Locator
    private readonly selectHeaderCheckbox: Locator
    private readonly deleteButton: Locator
    private readonly deleteWarningMessage: Locator
    private readonly YesDeleteConfirmButton: Locator
    private readonly nextPageButton: Locator
    readonly allUserRecordCheckbox: Locator
    private readonly changePasswordCheckbox: Locator


    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.titleHeader = new OpenSource_HeadersAndTitle(page);
this.searchField = page.getByPlaceholder("Search");
this.headerUserManagementButton = page.locator('.oxd-topbar-body-nav-tab').filter({hasText: 'User Management'});
this.addUserButton=page.getByRole('button', {name: 'Add'});
this.userRole =page.locator('.oxd-input-group').filter({hasText: 'User Role'}).locator('.oxd-select-text-input');
this.selectDropdown=page.getByRole('listbox');
this.employeeName= page.getByPlaceholder("Type for hints...");
this.status =page.locator('.oxd-input-group').filter({hasText: 'Status'}).locator('.oxd-select-text-input');
this.username= page.locator('.oxd-input-group').filter({hasText: 'Username'}).locator('input');
this.password= page.locator('.oxd-input-group').filter({hasText: /^Password$/}).locator('input');
this.confirmPassword= page.locator('.oxd-input-group').filter({hasText: /^Confirm Password$/}).locator('input');
this.saveUserButton =page.getByRole('button', {name: 'Save'});
this.selectHeaderCheckbox= page.locator('.oxd-table-header-cell').locator('.oxd-checkbox-input');
this.editButton= page.locator('.oxd-table-cell-action').locator('.bi-pencil-fill');
this.deleteButton =page.getByRole('button', {name: 'Delete'});
this.deleteWarningMessage =page.getByText('The selected record will be permanently deleted. Are you sure you want to continue?');
this.YesDeleteConfirmButton= page.getByRole('button', {name: 'Yes, Delete '});
this.allUserRecordCheckbox = this.page.locator('.oxd-table-card-cell-checkbox').locator('.oxd-checkbox-input')
this.nextPageButton =page.getByRole('navigation').locator('.bi-chevron-right');
this.changePasswordCheckbox =page.locator('form').filter({hasText: 'Yes'}).locator('.oxd-checkbox-input')

}

async navigateCreationOfUser(data:NavigateCreationOfUser){
    await this.click(this.headerUserManagementButton);
        const clickUsersHeader = this.page.getByRole('menuitem', {name: data.clickUsersHeader});
            await clickUsersHeader.click();
}
async userRowToEdit(data:AddUserData){
// const userRowToEdit = this.page.getByRole('row').filter({ hasText: data.username}).locator('.oxd-table-cell-actions').locator('.bi-pencil-fill');
//     await userRowToEdit.click();

    const userRow = this.page.getByRole('row').filter({ hasText: data.username});
    await this.waitForVisible(this.selectHeaderCheckbox);
    while (await userRow.count() === 0) {
        if (await this.nextPageButton.count() === 0) {
            throw new Error(`Employee not found: ${data.username}`);
        }
        await this.click(this.nextPageButton);
        await this.waitForVisible(this.selectHeaderCheckbox);
    }
    await userRow.locator('.oxd-table-cell-actions').locator('.bi-pencil-fill').click();
        await this.waitForVisible(this.titleHeader.titleHeader(headersTitles.editUser));

}



async enterTheNewDataUser(data: UpdateUserData){
    await this.click(this.username);
    await this.fill(this.username, data.updateUsername);
    await this.changePasswordCheckbox.check();
    await this.fill(this.password, data.updatePassword);
    await this.fill(this.confirmPassword, data.updateConfirmPassword)
    await this.click(this.saveUserButton);
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
    await this.waitForVisible(this.selectHeaderCheckbox);

}

 async createUser(data:AddUserData){
    await this.isVisible(this.addUserButton);
    await this.click(this.addUserButton);
    await this.pressSequentially(this.userRole, data.userRole);
    await this.selectDropdown.getByRole('option', {name: data.userRole}).click();
    await this.fill(this.employeeName, data.employeeName);
    await this.selectDropdown.getByRole('option', {name: data.employeeName}).click();
    await this.pressSequentially(this.status, data.status);
    await this.selectDropdown.getByRole('option', {name:data.status }).click();
    await this.fill(this.username, data.username);
    await this.fill(this.password, data.password);
    await this.fill(this.confirmPassword, data.confirmPassword);
    await this.click(this.saveUserButton);
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader); 
    await this.waitForVisible(this.selectHeaderCheckbox);

}
async clickDeleteUser(data:AddUserData)   {
const userRowToDeleteAndClickButton = this.page.getByRole('row').filter({ hasText: data.username}).locator('.oxd-table-cell-actions').locator('.bi-trash');
    await userRowToDeleteAndClickButton.click();
}
async confirmDeleteUser() {
    await this.click(this.YesDeleteConfirmButton);
}

verifyDeletedUser(username: string): Locator {
    return this.page.getByRole('row').filter({ hasText: username});
}
verifyTheUpdatedRecord(username: string): Locator {
    return this.page.getByRole('row').filter({hasText: username})
}
verifyTheCreatedUser(username: string): Locator {
    return this.page.getByRole('row').filter({hasText: username})
}
async deleteAllUSersRecord()   {
while(true){
    await this.click(this.selectHeaderCheckbox);
            // There is any record on the current page? if so, stop
     if (await this.allUserRecordCheckbox.count() === 0) {
            break;
        }
            // Are there any records to delete on the current page?
    await this.click(this.deleteButton);
            // Confirmation
    await this.click(this.YesDeleteConfirmButton);

            // Wait until records disappear
        await this.allUserRecordCheckbox.count() === 0;
        if (
            // Is there a next page?
            await this.nextPageButton.count() > 0 &&
            await this.nextPageButton.isVisible()) {
            await this.nextPageButton.click();
        } 
        else {
            break;
        }
    }
}

}



