import { Page, Locator} from "@playwright/test";


export class OpenSource_ToastMessage {
private readonly page: Page
readonly saveTextMessage: Locator
readonly saveUpdateMessage: Locator
readonly deleteMessage: Locator
readonly warningDeleteMessage: Locator


    constructor(page: Page){
this.page = page;
this.saveTextMessage = page.locator('.oxd-text--toast-message').filter({ hasText: 'Successfully Saved' });
this.saveUpdateMessage = page.locator('.oxd-text--toast-message').filter({ hasText: 'Successfully Updated' });
this.warningDeleteMessage = page.getByText('The selected record will be permanently deleted. Are you sure you want to continue?');
this.deleteMessage = page.locator('.oxd-text--toast-message').filter({ hasText: 'Successfully Deleted' });

}

}