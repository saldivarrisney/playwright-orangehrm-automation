import { Page, Locator} from "@playwright/test";


export class OpenSource_MenuFilter {
readonly page: Page
readonly menuSearch: Locator

    constructor(page: Page){
        this.page = page;
        this.menuSearch = page.getByPlaceholder("Search");

    }

async searchAndSelectMenu(menuName: string){
    await this.menuSearch.fill(menuName)
    await this.menuSearch.press('Enter')
        const result = this.page.locator('.oxd-main-menu-item', {hasText: menuName});
            await result.click();
}
}