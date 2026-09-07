import { expect} from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {
  LoginDataScenarios,
  headersTitles
} from '../../test-data/index';



test("Login with valid Username and Password", async ({loginFeature, openSource_HeadersAndTitle}) => {


    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible();
      
      });
    