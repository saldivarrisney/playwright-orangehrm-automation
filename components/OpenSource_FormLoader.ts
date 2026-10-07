import { Page, Locator} from "@playwright/test";

export class OpenSource_FormLoader {
readonly formLoader: Locator
readonly formLoaderToDisappear: Locator


constructor(page: Page){
this.formLoader = page.locator('.oxd-form-loader');
this.formLoaderToDisappear = page.locator('.oxd-form-loader');

}

}
