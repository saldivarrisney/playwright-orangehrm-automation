import { Page} from "@playwright/test";

export class OpenSource_HeadersAndTitle {
private readonly page: Page



    constructor(page: Page){
this.page = page;
}


titleHeader(title: string){
    return this.page.getByRole('heading', { level: 6, name: title });
    console.log(title);
}
errorMessage(warning: string) {
    return this.page.getByRole('heading', { name: warning });

}
}