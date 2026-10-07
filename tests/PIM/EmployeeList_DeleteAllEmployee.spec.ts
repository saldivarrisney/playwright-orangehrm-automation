import {expect} from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios, deleteSpecificRecord, headersTitles, menuFilter}
 from '../../test-data/index';

test.describe("Delete Employee record", () => {
  
  test.beforeEach("Delete specific employee", async ({loginFeature, openSource_MenuFilter, 
    openSource_HeadersAndTitle}) => {
      await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
        await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible
          await openSource_MenuFilter.searchAndSelectMenu(menuFilter.pim);
            await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.pimHeader)).toBeVisible
        })

    test("Delete specific employee", async ({deleteEmployee, openSource_ToastMessage}) => {
      await deleteEmployee.employeeList_deleteSpecificRecord(deleteSpecificRecord.adminEmployee);
        await expect(openSource_ToastMessage.deleteMessage).toBeVisible();
        await expect(openSource_ToastMessage.deleteMessage).toBeHidden();
          await expect(deleteEmployee.verifyDeletedEmployee(deleteSpecificRecord.adminEmployee.employeeId)).toHaveCount(0);
        
        })

     test("Delete All Employee Records", async ({deleteEmployee}) => {
      await deleteEmployee.employeeList_deleteAllRecord();
        await expect(deleteEmployee.verifyAllDeletedEmployee()).toHaveCount(0);

      
          })
})