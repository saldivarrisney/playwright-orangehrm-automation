import {expect} from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios, createEmployee, headersTitles, menuFilter, updateEmployee}
 from '../../test-data/index';

test.describe("Update Employee record", () => {

  test.beforeEach(async ({loginFeature, openSource_MenuFilter,openSource_HeadersAndTitle}) => {
        await loginFeature.openPage();
        await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.pim);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.pimHeader)).toBeVisible
        })

     test("Update Admin Employee", async ({updateEmployee_Features}) => {
          await updateEmployee_Features.updateEmployee(createEmployee.adminEmployee, updateEmployee.updateAdminEmployee);
            await expect(updateEmployee_Features.verifyUpdatedEmployee(updateEmployee.updateAdminEmployee.employeeId)).toHaveCount(0);
   
        })

     test("Update Non-admin Employee", async ({updateEmployee_Features}) => {
          await updateEmployee_Features.updateEmployee(createEmployee.nonAdminEmployee, updateEmployee.updateNonAdminEmployee);
            await expect(updateEmployee_Features.verifyUpdatedEmployee(updateEmployee.updateNonAdminEmployee.employeeId)).toHaveCount(0);

        })

})