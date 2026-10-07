import { test } from '../../fixtures/test.fixture';
import {expect} from '@playwright/test';
import { LoginDataScenarios, headersTitles,menuFilter, massCreateOfEmployee }
 from '../../test-data/index';

test.describe("Create 10 employee", () =>{

    test.setTimeout(300_000);//set a time, ex. 5minutes
        //test.slow()up to 90seconds only  
    test.beforeEach("Create Employees", async ({ loginFeature, openSource_HeadersAndTitle,openSource_MenuFilter,creationOfEmployee}) => {
        await loginFeature.openPage();
        await loginFeature.logIn(LoginDataScenarios.validCredentials.username, LoginDataScenarios.validCredentials.password);
            await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible();        
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.pim);
    
    })

        test("Create Employees", async ({creationOfEmployee}) => {
        for (const employee of massCreateOfEmployee) {
            await creationOfEmployee.addEmployee_createEmployee(employee);    
                await expect(creationOfEmployee.verifyCreatedEmployee(employee.firstName,employee.lastName)).toBeVisible
            

    }
    })  

  })
