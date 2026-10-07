import {expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import {
  LoginDataScenarios,
  headersTitles,
  menuFilter,
  myInfoPersonalDetails,
  navigateCreationOfUser,
  createUser,
  updateUser
} from '../../test-data/index';


test.describe('Create Users then delete functionalities', () =>{
 test.slow();
test.beforeEach(async ({loginFeature, openSource_HeadersAndTitle, openSource_MenuFilter, myInfoPersonalDetailsTab,
    openSource_ToastMessage,adminFeatures}) => {
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

test('Create Non-Admin user and then Delete it', async ({openSource_ToastMessage, adminFeatures}) => {
    await adminFeatures.createUser(createUser.addAdminUser)        
        await expect(adminFeatures.verifyTheCreatedUser(createUser.addAdminUser.username)).toBeVisible();
            await adminFeatures.clickDeleteUser(createUser.addAdminUser)
                await expect(openSource_ToastMessage.warningDeleteMessage).toBeVisible();                                                                           
                        await adminFeatures.confirmDeleteUser();          
                            await expect(adminFeatures.verifyDeletedUser(createUser.addAdminUser.username)).toHaveCount(0);

                    })

test('Admin- Delete All User Records', async ({openSource_ToastMessage, adminFeatures}) => {
    await adminFeatures.createUser(createUser.addNonAdminUser);
        await expect(adminFeatures.verifyTheCreatedUser(createUser.addNonAdminUser.username)).toBeVisible();
            await adminFeatures.deleteAllUSersRecord();
                await expect(adminFeatures.allUserRecordCheckbox).toHaveCount(0);    

            })                    
                })



