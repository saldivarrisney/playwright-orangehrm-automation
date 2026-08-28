import { ENV_SouceDemo } from "../../config/env";
import { test, expect } from "@playwright/test";
import { LoginFeature } from "../../pages/login/OpenSource_Login";
import { MyInfoPersonalDetailsTab } from "../../pages/myInfo/MyInfo_PersonalDetails";
import { MyInfoContactDetailsTab } from "../../pages/myInfo/MyInfo_ContactDetails";
import { LoginDataScenarios } from "../../test-data/Login/OpenSource_Login";
import {myInfoCustomFields,myInfoPersonalDetails,} from "../../test-data/MyInfo/MyInfo_PersonalDetails";
import {myInfoContactDetails,} from "../../test-data/MyInfo/MyInfo_ContactDetails";
import { MyInfoEmergencyContactsTab } from "../../pages/myInfo/MyInfo_EmergencyContacts";
import {myInfoEmergencyContacts,} from "../../test-data/MyInfo/MyInfo_EmergencyContacts";
import {myInfoDependents} from "../../test-data/MyInfo/MyInfo_Dependents";
import { MyInfoDependentsTab } from "../../pages/myInfo/MyInfo_Dependents";
import { MyInfoImmigrationsTab } from "../../pages/myInfo/MyInfo_Immigration";
import {myInfoImmigration} from "../../test-data/MyInfo/MyInfo_Immigration";
import { MyInfoQualificationsTab } from "../../pages/myInfo/MyInfo_Qualifications";
import {education, experience, language, license,skills,} from "../../test-data/MyInfo/MyInfo_Qualifications";
import { MyInfoMembershipTab } from "../../pages/myInfo/MyInfo_Membership";
import {myInfoMembership} from "../../test-data/MyInfo/MyInfo_Membership";
import { OpenSource_ToastMessage } from "../../components/OpenSource_ToastMessage";
import { OpenSource_MenuFilter } from "../../components/OpenSource_MenuFilter";
import { menuFilter, myInfoTabName, myInfoContactDetails_Attachment ,myInfoPersonalDetails_Attachment,
    myInfoEmergencyContacts_Attachment, myInfoMemberships_Attahment, myInfoDependents_Attachment ,myInfoImmigration_Attachment,myInfoQualifications_Attachment }from "../../test-data/components/OpenSource_Components";
import { OpenSource_MyInfoTabs } from "../../components/OpenSource_MyInfoTabs";
import { OpenSource_Attachment } from "../../components/OpenSource_Attachment";

test.describe("My Info Features", () => {
  let loginFeature: LoginFeature;
  let myInfoPersonalDetailsTab: MyInfoPersonalDetailsTab;
  let myInfoContactDetailsTab: MyInfoContactDetailsTab;
  let myInfoEmergencyContactsTab: MyInfoEmergencyContactsTab;
  let myInfoDependentsTab: MyInfoDependentsTab;
  let myInfoImmigrationsTab: MyInfoImmigrationsTab;
  let myInfoQualificationsTab: MyInfoQualificationsTab;
  let myInfoMembershipTab: MyInfoMembershipTab;
  let openSource_ToastMessage: OpenSource_ToastMessage;
  let openSource_MenuFilter: OpenSource_MenuFilter;
  let openSource_MyInfoTabs: OpenSource_MyInfoTabs;
  let openSource_Attachment: OpenSource_Attachment;


  test.beforeEach(async ({ page }) => {
    loginFeature = new LoginFeature(page);
    myInfoPersonalDetailsTab = new MyInfoPersonalDetailsTab(page);
    myInfoContactDetailsTab = new MyInfoContactDetailsTab(page);
    myInfoEmergencyContactsTab = new MyInfoEmergencyContactsTab(page);
    myInfoDependentsTab = new MyInfoDependentsTab(page);
    myInfoImmigrationsTab = new MyInfoImmigrationsTab(page);
    myInfoQualificationsTab = new MyInfoQualificationsTab(page);
    myInfoMembershipTab = new MyInfoMembershipTab(page);
    openSource_ToastMessage = new OpenSource_ToastMessage(page);
    openSource_MenuFilter = new OpenSource_MenuFilter(page);
    openSource_MyInfoTabs = new OpenSource_MyInfoTabs(page);
    openSource_Attachment = new OpenSource_Attachment(page);

    await loginFeature.navigatePage(ENV_SouceDemo.source_url);
      await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
        await expect(loginFeature.titleHeader(LoginDataScenarios.loginHeader)).toBeVisible();
      
      });
  test("My Info Features", async () => {
    await test.step("Create and update MyInfo module", async () => {
      await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo);
        await expect(loginFeature.titleHeader(myInfoPersonalDetails.personalDetailsTab)).toBeVisible();
          await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.personalDetails);
            await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails,);
              await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
              await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
              await myInfoPersonalDetailsTab.updateCustomFields(myInfoCustomFields);
              await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
              await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_Attachment.addAttachment(myInfoPersonalDetails_Attachment)
              await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
              await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.contactDetails);
            await myInfoContactDetailsTab.updateContactDetails(myInfoContactDetails);
              await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
              await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
              await openSource_Attachment.addAttachment(myInfoContactDetails_Attachment);
              await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
              await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
            await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.emergencyContacts);
              await myInfoEmergencyContactsTab.addEmergencyContacts(myInfoEmergencyContacts);
              await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await openSource_Attachment.addAttachment(myInfoEmergencyContacts_Attachment)
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.dependents);
                await myInfoDependentsTab.addDependents(myInfoDependents);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await openSource_Attachment.addAttachment(myInfoDependents_Attachment)
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.immigration);
                await myInfoImmigrationsTab.addImmigration(myInfoImmigration);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await openSource_Attachment.addAttachment(myInfoImmigration_Attachment);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.qualifications);
                await myInfoQualificationsTab.addExperience(experience,);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await myInfoQualificationsTab.addEducation(education);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await myInfoQualificationsTab.addSkill(skills);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await myInfoQualificationsTab.addLanguage(language,);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await myInfoQualificationsTab.addLicense(license,);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_Attachment.addAttachment(myInfoQualifications_Attachment);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.memberships);
                await myInfoMembershipTab.addMembership(myInfoMembership);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_Attachment.addAttachment(myInfoMemberships_Attahment);
                  await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                  await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
    });
  });
});
