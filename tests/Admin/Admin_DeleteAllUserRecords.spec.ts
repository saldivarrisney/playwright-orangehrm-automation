import {expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { LoginDataScenarios } from "../../test-data/Login/OpenSource_Login";
import { addAdminUser, addNonAdminUser, navigateCreationOfUSer } from "../../test-data/admin/Admin_UserManagement";
import { myInfoPersonalDetails } from '../../test-data/MyInfo/MyInfo_PersonalDetails';
import { openSource_HeadersAndTitle_Data, menuFilter} from '../../test-data/components/OpenSource_Components';



test.describe('Delete Fucntionalities', () =>{
 
test.beforeEach(async ({loginFeature, openSource_HeadersAndTitle}) => {
    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.loginHeader)).toBeVisible();
     
      });
test('Admin- Delete All User Records', async ({openSource_MenuFilter,openSource_HeadersAndTitle,
    myInfoPersonalDetailsTab, openSource_ToastMessage, adminFeatures}) => {
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerPersonalDetails)).toBeVisible();
                await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin);   
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerAdmin)).toBeVisible();                 
                await adminFeatures.navigateCreationOfUSer(navigateCreationOfUSer); 
                    await adminFeatures.createUser(addNonAdminUser);
                        await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                    await adminFeatures.deleteAllUSersRecord();
                        await expect(adminFeatures.allUserRecordCheckbox).toHaveCount(0);    
})

test('Create Non-Admin user and then Delete it', async ({openSource_MenuFilter,openSource_HeadersAndTitle,
    myInfoPersonalDetailsTab, openSource_ToastMessage, adminFeatures}) => {
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerPersonalDetails)).toBeVisible();
                await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin);      
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerAdmin)).toBeVisible();                               
                  await adminFeatures.navigateCreationOfUSer(navigateCreationOfUSer); 
                await adminFeatures.createUser(addAdminUser)        
                        await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                            await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                                await adminFeatures.clickDeleteUser(addAdminUser)
                                  await expect(openSource_ToastMessage.warningDeleteMessage).toBeVisible();                                                                           
                                    await adminFeatures.confirmDeleteUser();          
                                        await expect(openSource_ToastMessage.deleteMessage).toBeVisible();                                       
                                            await expect(openSource_ToastMessage.deleteMessage).toBeHidden();
                                                await expect(adminFeatures.verifyDeletedUser(addAdminUser.username)).toHaveCount(0);

                    })
                })



