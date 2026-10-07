import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import {
  LoginDataScenarios,
  headersTitles,
  menuFilter,
  myInfoPersonalDetails,
  navigateCreationOfUser,
  createUser,
  updateUser,
  createEmployee
} from '../../test-data/index';



test.describe('Create Users then update', () =>{
test.slow();
test.beforeEach(async ({loginFeature,openSource_HeadersAndTitle, openSource_MenuFilter, myInfoPersonalDetailsTab,
    openSource_ToastMessage, adminFeatures}) => {
    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerPersonalDetails)).toBeVisible();
                    await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails.myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                    await adminFeatures.navigateCreationOfUser(navigateCreationOfUser); 
      });
test('Create Admin user then update', async ({openSource_MenuFilter, openSource_HeadersAndTitle,openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(createUser.addAdminUser)        
                    await expect(adminFeatures.verifyTheCreatedUser(createUser.addAdminUser.username)).toBeVisible();
           await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                        await adminFeatures.navigateCreationOfUser(navigateCreationOfUser);          
                        await adminFeatures.userRowToEdit(createUser.addAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateUser.updateAdminUser)
                        await expect(adminFeatures.verifyTheUpdatedRecord(updateUser.updateAdminUser.updateUsername)).toBeVisible

                    })
test('Create Non-Admin user then update', async ({openSource_MenuFilter, openSource_HeadersAndTitle,openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(createUser.addNonAdminUser)        
                     await expect(adminFeatures.verifyTheCreatedUser(createUser.addNonAdminUser.username)).toBeVisible();
                await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                        await adminFeatures.navigateCreationOfUser(navigateCreationOfUser);   
                            await adminFeatures.userRowToEdit(createUser.addNonAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateUser.updateNonAdminUser)
                        await expect(adminFeatures.verifyTheUpdatedRecord(updateUser.updateNonAdminUser.updateUsername)).toBeVisible

                        })
})