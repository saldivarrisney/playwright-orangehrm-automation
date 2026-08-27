import { Page, Locator } from "@playwright/test";


export class LoginFeature{
    private readonly page: Page
    private readonly usernameInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator


constructor (page: Page){
    this.page = page;
    this.usernameInput = page.getByPlaceholder('username')
    this.passwordInput = page.getByPlaceholder('password')
    this.loginButton = page.getByRole('button',{name: 'Login'});

}
async navigatePage(url: string){
      await this.page.goto(url);
}
async logIn(username: string, password: string){
      await this.usernameInput.fill(username)
      await this.passwordInput.fill(password)
      await this.loginButton.click();
}
 titleHeader(title: string){
    return this.page.getByRole('heading', { level: 6, name: title });
    console.log(title);
}
errorMessage(warning: string) {
    return this.page.getByRole('heading', { name: warning });

}

}