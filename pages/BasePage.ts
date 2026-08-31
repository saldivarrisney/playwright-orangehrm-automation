import { Page, Locator } from "@playwright/test";

export class BasePage {
    protected readonly page: Page;

 
constructor(page: Page){
    this.page = page;

}

async navigate(url: string){
      await this.page.goto(url); 
}
async fill(locator: Locator, value: string){
    await locator.fill(value);
}
async click(locator: Locator){
    await locator.click();
}
async pressSequentially(locator: Locator, value: string) {
        await locator.pressSequentially(value);
    }

}