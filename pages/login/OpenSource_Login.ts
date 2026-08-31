import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";


export class LoginFeature extends BasePage{
    private readonly usernameInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator


constructor (page: Page){
    super(page)
    this.usernameInput = page.getByPlaceholder('username')
    this.passwordInput = page.getByPlaceholder('password')
    this.loginButton = page.getByRole('button',{name: 'Login'});

}


async openPage(){
    await this.navigate('/');

}
async logIn(username: string, password: string){
// async logIn(username: string, password: string){
      await this.fill(this.usernameInput, username)
      await this.fill(this.passwordInput, password)
      await this.click(this.loginButton);
}

}