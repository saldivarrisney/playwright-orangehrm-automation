import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import {
  LoginDataScenarios,
  headersTitles,
  menuFilter,
  myInfoPersonalDetail,
  navigateCreationOfUser,
  createUser,
  updateUser
} from '../../test-data/index';



test.describe('Create Users then update', () =>{

test.beforeEach(async ({loginFeature,openSource_HeadersAndTitle, openSource_MenuFilter, myInfoPersonalDetailsTab,
    openSource_ToastMessage, adminFeatures}) => {
    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerPersonalDetails)).toBeVisible();
                    await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetail.myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                    await adminFeatures.navigateCreationOfUser(navigateCreationOfUser); 
      });
test('Create Admin user then update', async ({openSource_MenuFilter, openSource_HeadersAndTitle,openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(createUser.addAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
           await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                        await adminFeatures.navigateCreationOfUser(navigateCreationOfUser);          
                        await adminFeatures.updateUser(createUser.addAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateUser.updateAdminUser)
                        await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                                await expect(adminFeatures.verifyTheUpdatedRecord(updateUser.updateAdminUser.updateUsername)).toHaveCount(1);
                        })
test('Create Non-Admin user then update', async ({openSource_MenuFilter, openSource_HeadersAndTitle,openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(createUser.addNonAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                                   await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerAdmin)).toBeVisible();
                        await adminFeatures.navigateCreationOfUser(navigateCreationOfUser);   
                            await adminFeatures.updateUser(createUser.addNonAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateUser.updateNonAdminUser)
                        await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                                await expect(adminFeatures.verifyTheUpdatedRecord(updateUser.updateNonAdminUser.updateUsername)).toHaveCount(1);

                        })
})