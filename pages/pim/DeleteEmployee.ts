import { Page, Locator} from "@playwright/test";
import { BasePage } from "../BasePage";
import { OpenSource_ToastMessage } from "../../components/OpenSource_ToastMessage";
import { DeleteSpecificRecord } from "../../types/PIM/DeleteSpecificRecord";
import { OpenSource_FormLoader } from "../../components/OpenSource_FormLoader";


export class DeleteEmployee extends BasePage{
readonly formLoader: OpenSource_FormLoader;
private readonly deleteAllbutton: Locator
private readonly warningMessage: OpenSource_ToastMessage;
private readonly YesDeleteButton: Locator
private readonly nextPageButton: Locator
private readonly selectHeaderCheckbox: Locator


    constructor(page: Page){
super(page);
this.formLoader = new OpenSource_FormLoader(page);
this.warningMessage = new OpenSource_ToastMessage(page);
this.deleteAllbutton = page.getByRole("button",{name: "Delete Selected"});
this.YesDeleteButton = page.getByRole("button",{name: "Yes, Delete"});
this.nextPageButton =page.getByRole('navigation').getByRole("button").locator('.bi-chevron-right');
this.selectHeaderCheckbox= page.locator('.oxd-table-header-cell').locator('.oxd-checkbox-input');

}
async employeeList_deleteSpecificRecord(data: DeleteSpecificRecord) {
    const employeeRow = this.page.getByRole('row').filter({ hasText: data.employeeId });
    await this.waitForVisible(this.selectHeaderCheckbox);
    while (await employeeRow.count() === 0) {
        if (await this.nextPageButton.count() === 0) {
        }
        await this.click(this.nextPageButton);
        await this.waitForVisible(this.selectHeaderCheckbox);
    }
    await employeeRow.locator('.oxd-table-cell-actions').locator('.bi-trash').click();
    await this.waitForVisible(this.warningMessage.warningDeleteMessage);
    await this.click(this.YesDeleteButton);
    await this.waitUntilHidden(this.warningMessage.warningDeleteMessage);
    await this.waitForFormLoaderToDisappear(this.formLoader.formLoader);
        if (await employeeRow.count() !== 0) {
            throw new Error(`Employee was not deleted: ${data.employeeId}`);
}
}

async employeeList_deleteAllRecord() {
    await this.waitForVisible(this.selectHeaderCheckbox);
    while (true) {
        await this.click(this.selectHeaderCheckbox);
            if (!(await this.isVisible(this.deleteAllbutton))) {
            break;
        }
        await this.click(this.deleteAllbutton);
        await this.waitForVisible(this.warningMessage.warningDeleteMessage);
        await this.click(this.YesDeleteButton);
        await this.waitUntilHidden(this.warningMessage.warningDeleteMessage);
        await this.waitForFormLoaderToDisappear(this.formLoader.formLoader);

        }
}
verifyDeletedEmployee(employeeId: string): Locator {
    return this.page.getByRole('row').filter({ hasText: employeeId});
}
verifyAllDeletedEmployee() {
    return this.page.getByRole("button",{name: "Delete Selected"});

}
}


