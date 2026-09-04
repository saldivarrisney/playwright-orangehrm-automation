import { test, expect } from '../../fixtures/test.fixture';
import { menuFilter } from '../../test-data/components/OpenSource_Components.json';
import { addNonAdminUser, addAdminUser} from '../../test-data/admin/Admin_UserManagement.json';
import { myInfoPersonalDetails,  } from '../../test-data/MyInfo/MyInfo_PersonalDetails.json';
import { navigateCreationOfUser } from '../../test-data/admin/Admin_UserManagement.json';
import { openSource_HeadersAndTitle_Data } from '../../test-data/components/OpenSource_Components.json';
import {LoginDataScenarios} from "../../test-data/Login/OpenSource_Login";


test.describe('Create Users', () =>{

test.beforeEach(async ({loginFeature, openSource_HeadersAndTitle,openSource_MenuFilter, myInfoPersonalDetailsTab,
    openSource_ToastMessage, adminFeatures
 }) => {
    await loginFeature.openPage();
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password);
        await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.loginHeader)).toBeVisible();
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
                await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
            await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
                await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerAdmin)).toBeVisible();                               
                    await adminFeatures.navigateCreationOfUser(navigateCreationOfUser); 

      });
test('Create Admin user through Json', async ({openSource_ToastMessage, adminFeatures}) => {
        await adminFeatures.createUser(addAdminUser)        
        await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
            await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
})
test('Create Non-Admin user through Json', async ({openSource_ToastMessage, adminFeatures}) => {

        await adminFeatures.createUser(addNonAdminUser)        
        await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
            await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
})
})