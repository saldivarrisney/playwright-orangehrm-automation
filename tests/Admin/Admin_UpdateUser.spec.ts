import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { LoginDataScenarios } from '../../test-data/Login/OpenSource_Login';
import {menuFilter } from '../../test-data/components/OpenSource_Components.json';
import { addNonAdminUser, addAdminUser, updateNonAdminUser, 
updateAdminUser} from '../../test-data/admin/Admin_UserManagement.json';
import { myInfoPersonalDetails,  } from '../../test-data/MyInfo/MyInfo_PersonalDetails.json';
import { navigateCreationOfUser } from '../../test-data/admin/Admin_UserManagement.json';
import { openSource_HeadersAndTitle_Data } from '../../test-data/components/OpenSource_Components.json';

test.describe('Create Users then update', () =>{

test.beforeEach(async ({loginFeature,openSource_HeadersAndTitle, openSource_MenuFilter, myInfoPersonalDetailsTab,
    openSource_ToastMessage, adminFeatures}) => {
    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.loginHeader)).toBeVisible();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerPersonalDetails)).toBeVisible();
                    await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerAdmin)).toBeVisible();
                    await adminFeatures.navigateCreationOfUser(navigateCreationOfUser); 
      });
test('Create Admin user then update', async ({openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(addAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await adminFeatures.updateUser(addAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateAdminUser)
                        await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                                await expect(adminFeatures.verifyTheUpdatedRecord(updateAdminUser.updateUsername)).toHaveCount(1);
                        })
test('Create Non-Admin user then update', async ({openSource_ToastMessage, adminFeatures}) => {
                await adminFeatures.createUser(addNonAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                            await adminFeatures.updateUser(addNonAdminUser);
                    await adminFeatures.enterTheNewDataUser(updateNonAdminUser)
                        await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                                await expect(adminFeatures.verifyTheUpdatedRecord(updateNonAdminUser.updateUsername)).toHaveCount(1);

                        })
})