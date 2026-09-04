import { expect} from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios} from "../../test-data/Login/OpenSource_Login";
import {openSource_HeadersAndTitle_Data} from '../../test-data/components/OpenSource_Components.json';


test("Login with valid Username and Password", async ({page, loginFeature, openSource_HeadersAndTitle}) => {


    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.loginHeader)).toBeVisible();
      
      });
    