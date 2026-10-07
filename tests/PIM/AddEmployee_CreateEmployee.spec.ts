import {expect} from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios, headersTitles, menuFilter, createEmployee}
 from '../../test-data/index';

test.describe("Create non-admin and admin Employee", () => {

  test.beforeEach("Create non-admin Employee", async ({loginFeature, openSource_MenuFilter, openSource_HeadersAndTitle,creationOfEmployee}) => {
    await loginFeature.openPage();
    await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
      await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.pim);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.pimHeader)).toBeVisible
          })
          
    test("Create non-admin Employee", async ({creationOfEmployee,}) => {
      await creationOfEmployee.addEmployee_createEmployee(createEmployee.nonAdminEmployee);
        await expect(creationOfEmployee.verifyCreatedEmployee(createEmployee.nonAdminEmployee.firstName,createEmployee.nonAdminEmployee.lastName )).toBeVisible

    })
     
     test("Create admin Employee", async ({creationOfEmployee}) => {
      await creationOfEmployee.addEmployee_createEmployee(createEmployee.adminEmployee);
        await expect(creationOfEmployee.verifyCreatedEmployee(createEmployee.adminEmployee.firstName,createEmployee.adminEmployee.lastName )).toBeVisible



          })
})