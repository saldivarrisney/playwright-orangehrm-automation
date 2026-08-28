import { ENV_SouceDemo } from '../../config/env';
import { test, expect } from '@playwright/test';
import { LoginFeature } from "../../pages/login/OpenSource_Login";
import { LoginDataScenarios } from "../../test-data/Login/OpenSource_Login";
import { OpenSource_ToastMessage } from '../../components/OpenSource_ToastMessage';
import { AdminFeatures } from "../../pages/admin/Admin_UserManagementAddUser";
import { MyInfoPersonalDetailsTab } from '../../pages/myInfo/MyInfo_PersonalDetails';
import { OpenSource_MenuFilter } from '../../components/OpenSource_MenuFilter';
import { menuFilter } from '../../test-data/components/OpenSource_Components';
import { addNonAdminUser, addAdminUser} from '../../test-data/admin/Admin_UserManagement';
import { myInfoPersonalDetails,  } from '../../test-data/MyInfo/MyInfo_PersonalDetails';
import { navigateCreationOfUSer } from '../../test-data/admin/Admin_UserManagement';


test.describe('Create Users', () =>{
    let loginFeature: LoginFeature;
    let adminFeatures: AdminFeatures;
    let openSource_ToastMessage: OpenSource_ToastMessage;
    let myInfoPersonalDetailsTab: MyInfoPersonalDetailsTab;
    let openSource_MenuFilter: OpenSource_MenuFilter;

test.beforeEach(async ({page}) => {
    loginFeature = new LoginFeature(page);
    adminFeatures = new AdminFeatures(page);
    openSource_ToastMessage = new OpenSource_ToastMessage(page);
    myInfoPersonalDetailsTab = new MyInfoPersonalDetailsTab(page);
    openSource_MenuFilter = new OpenSource_MenuFilter(page);



await loginFeature.navigatePage(ENV_SouceDemo.source_url)
})
test('Create Admin user', async ({page}) => {
    await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password)
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
            await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
            await adminFeatures.navigateCreationOfUSer(navigateCreationOfUSer); 
                await adminFeatures.createUser(addAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
})
test('Create Non-Admin user', async ({page}) => {
 await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password)
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo); 
            await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails)                  
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden(); 
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.admin); 
            await adminFeatures.navigateCreationOfUSer(navigateCreationOfUSer); 
                await adminFeatures.createUser(addNonAdminUser)        
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                        await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
})
})