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
 async reload() {
    await this.page.reload();
}
async pressSequentially(locator: Locator, value: string) {
    await locator.pressSequentially(value);
    }
        // Waiting
async waitForVisible(locator: Locator) : Promise<void>{
    await locator.waitFor({ state: "visible" });
    }
async press(locator: Locator, key: string) {
    await locator.press(key);
    }
            // Waiting to hide up to 3seconds
async waitUntilHidden(locator: Locator) : Promise<void>{
     await locator.waitFor({ state: 'hidden' });
}
            // Waiting to hide up to 3seconds
async waitForFormLoaderToDisappear(locator: Locator, timeout = 60000): Promise<void>{
     await locator.waitFor({ state: 'hidden',timeout });
}
async setInputFile(locator: Locator, filePath: string) {
    await locator.setInputFiles(filePath); 
}
async isVisible(locator: Locator) {
        return await locator.isVisible();
    }
}