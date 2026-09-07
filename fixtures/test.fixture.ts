import { test as base, expect, Page } from '@playwright/test';
//components
import { OpenSource_Attachment } from '../components/OpenSource_Attachment';
import { OpenSource_MenuFilter } from '../components/OpenSource_MenuFilter';
import { OpenSource_MyInfoTabs } from '../components/OpenSource_MyInfoTabs';
import { OpenSource_HeadersAndTitle } from '../components/OpenSource_TitleAndHeader';
import { OpenSource_ToastMessage } from '../components/OpenSource_ToastMessage';
//pages
import { AdminFeatures } from '../pages/admin/Admin_UserManagementAddUser';
import { LoginFeature } from '../pages/login/OpenSource_Login';
import { MyInfoContactDetailsTab } from '../pages/myInfo/MyInfo_ContactDetails';
import { MyInfoDependentsTab } from '../pages/myInfo/MyInfo_Dependents';
import { MyInfoEmergencyContactsTab } from '../pages/myInfo/MyInfo_EmergencyContacts';
import { MyInfoImmigrationsTab } from '../pages/myInfo/MyInfo_Immigration';
import { MyInfoMembershipTab } from '../pages/myInfo/MyInfo_Membership';
import { MyInfoPersonalDetailsTab } from '../pages/myInfo/MyInfo_PersonalDetails';
import { MyInfoQualificationsTab } from '../pages/myInfo/MyInfo_Qualifications';



type Fixtures = {
    //components
    openSource_Attachment:OpenSource_Attachment;
    openSource_MenuFilter: OpenSource_MenuFilter;
    openSource_MyInfoTabs: OpenSource_MyInfoTabs;
    openSource_HeadersAndTitle: OpenSource_HeadersAndTitle;
    //type
    adminFeatures:AdminFeatures;
    loginFeature: LoginFeature;
    myInfoContactDetailsTab: MyInfoContactDetailsTab;
    myInfoDependentsTab:MyInfoDependentsTab;
    myInfoEmergencyContactsTab: MyInfoEmergencyContactsTab;
    myInfoImmigrationsTab: MyInfoImmigrationsTab;
    myInfoMembershipTab:MyInfoMembershipTab;
    myInfoPersonalDetailsTab: MyInfoPersonalDetailsTab;
    myInfoQualificationsTab:MyInfoQualificationsTab;
    openSource_ToastMessage:OpenSource_ToastMessage;



};
export const test = base.extend<Fixtures>({

//components
    openSource_Attachment: async ({ page }, use) => {
        const openSource_Attachment = new OpenSource_Attachment(page);
        await use(openSource_Attachment );
    },
    
    openSource_MenuFilter: async ({ page }, use) => {
        const openSource_MenuFilter = new OpenSource_MenuFilter(page);
        await use(openSource_MenuFilter );
    },
    openSource_MyInfoTabs: async ({ page }, use) => {
        const openSource_MyInfoTabs = new OpenSource_MyInfoTabs(page);
        await use(openSource_MyInfoTabs );
    },
    openSource_HeadersAndTitle: async ({ page }, use) => {
        const openSource_HeadersAndTitle = new OpenSource_HeadersAndTitle(page);
        await use(openSource_HeadersAndTitle );
    },

    //POM
    adminFeatures: async ({ page }, use) => {
        const adminFeatures = new AdminFeatures(page);
        await use(adminFeatures );
    },
    loginFeature: async ({ page }, use) => {
        const loginFeature = new LoginFeature(page);
        await use(loginFeature);
    },

    myInfoContactDetailsTab: async ({ page }, use) => {
        const myInfoContactDetailsTab = new MyInfoContactDetailsTab(page);
        await use(myInfoContactDetailsTab);
    },
    myInfoDependentsTab: async ({ page }, use) => {
        const myInfoDependentsTab = new MyInfoDependentsTab(page);
        await use(myInfoDependentsTab);
    },
    myInfoEmergencyContactsTab: async ({ page }, use) => {
        const myInfoEmergencyContactsTab = new MyInfoEmergencyContactsTab(page);
        await use(myInfoEmergencyContactsTab );
    },
    myInfoImmigrationsTab: async ({ page }, use) => {
        const myInfoImmigrationsTab = new MyInfoImmigrationsTab(page);
        await use(myInfoImmigrationsTab );
    },
    myInfoMembershipTab: async ({ page }, use) => {
        const myInfoMembershipTab = new MyInfoMembershipTab(page);
        await use(myInfoMembershipTab );
    },
    myInfoPersonalDetailsTab: async ({ page }, use) => {
        const myInfoPersonalDetailsTab = new MyInfoPersonalDetailsTab(page);
        await use(myInfoPersonalDetailsTab );
    },

    myInfoQualificationsTab: async ({ page }, use) => {
        const myInfoQualificationsTab = new MyInfoQualificationsTab(page);
        await use(myInfoQualificationsTab );
    },
    openSource_ToastMessage: async ({ page }, use) => {
        const openSource_ToastMessage = new OpenSource_ToastMessage(page);
        await use(openSource_ToastMessage );
    },

});
export { expect };