import { Page, Locator, expect } from "@playwright/test";
import {NavigateCreationOfUSer , UpdateUserData, UserData} from "../../types/Admin/Admin_UserManagement";
// import { OpenSource_ToastMessage } from "../../components/MyInfo_ToastMessage";

export class AdminFeatures{
    // private readonly toastMessage: OpenSource_ToastMessage;
    readonly page: Page
    readonly searchField: Locator
    readonly headerUserManagementButton: Locator
    readonly addUserButton: Locator
    readonly userRole: Locator
    readonly employeeName: Locator
    readonly status: Locator
    readonly username: Locator
    readonly password: Locator
    readonly confirmPassword: Locator
    readonly saveUserButton: Locator
    readonly selectDropdown: Locator
    readonly editButton: Locator
    readonly selectHeaderCheckbox: Locator
    readonly deleteButton: Locator
    readonly deleteWarningMessage: Locator
    readonly YesDeleteConfirmButton: Locator
    readonly nextPageButton: Locator
    readonly allUserRecordCheckbox: Locator
    readonly changePasswordCheckbox: Locator


    constructor(page: Page){
this.page = page;
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

async navigateCreationOfUSer(data:NavigateCreationOfUSer){
    await this.headerUserManagementButton.click();
        const clickUsersHeader = this.page.getByRole('menuitem', {name: data.clickUsersHeader});
            await clickUsersHeader.click();
}

async updateUser(data:UserData){
const userRowToEdit = this.page.getByRole('row').filter({ hasText: data.username }).locator('.oxd-table-cell-actions').locator('.bi-pencil-fill');
    await userRowToEdit.click();
}

async enterTheNewDataUser(data: UpdateUserData){
    await this.username.click();
    await this.username.fill(data.updateUsername);
    await this.changePasswordCheckbox.check();
    await this.password.fill(data.updatePassword);
    await this.confirmPassword.fill(data.updateConfirmPassword)
    await this.saveUserButton.click();
}

 async createUser(data:UserData){
    await this.addUserButton.click();
    await this.userRole.pressSequentially(data.userRole);
    await this.selectDropdown.getByRole('option', {name: data.userRole}).click();
    await this.employeeName.fill(data.employeeName);
    await this.selectDropdown.getByRole('option', {name: data.employeeName}).click();
    await this.status.pressSequentially(data.status);
    await this.selectDropdown.getByRole('option', {name:data.status }).click();
    await this.username.fill(data.username);
    await this.password.fill(data.password);
    await this.confirmPassword.fill(data.confirmPassword);
    await this.saveUserButton.click();
}
async clickDeleteUser(data:UserData)   {
const userRowToDeleteAndClickButton = this.page.getByRole('row').filter({ hasText: data.username }).locator('.oxd-table-cell-actions').locator('.bi-trash');
    await userRowToDeleteAndClickButton.click();
}
async confirmDeleteUser() {
    await this.YesDeleteConfirmButton.click();
}

verifyDeletedUser(username: string): Locator {
    return this.page.getByRole('row').filter({ hasText: username });
}


async deleteAllUSersRecord()   {
while(true){
    await this.selectHeaderCheckbox.click();
            // May records ba sa current page? if wala, stop
     if (await this.allUserRecordCheckbox.count() === 0) {
            break;
        }
            // May records kaya ededelete
    await this.deleteButton.click();
            // Confirmation
    await this.YesDeleteConfirmButton.click();

            // Wait until records disappear
        await expect(this.allUserRecordCheckbox).toHaveCount(0);
        if (
            // May Next page ba?
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



