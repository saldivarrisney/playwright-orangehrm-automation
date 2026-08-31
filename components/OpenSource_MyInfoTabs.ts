import { Page, Locator} from "@playwright/test";

export class OpenSource_MyInfoTabs {
readonly page: Page
readonly tabRole: Locator

constructor(page: Page){
this.page = page;
this.tabRole =page.locator('.orangehrm-tabs');
}


async myInfoTabs(myInfoTabName: string){
    await this.tabRole.getByRole('tab', {name:myInfoTabName}).click();

}
}