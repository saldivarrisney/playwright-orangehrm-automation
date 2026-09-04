import { expect } from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios} from "../../test-data/Login/OpenSource_Login";
import {myInfoCustomFields,myInfoPersonalDetails,} from "../../test-data/MyInfo/MyInfo_PersonalDetails.json";
import {myInfoContactDetails,} from "../../test-data/MyInfo/MyInfo_ContactDetails.json";
import {myInfoEmergencyContacts,} from "../../test-data/MyInfo/MyInfo_EmergencyContacts.json";
import {myInfoDependents} from "../../test-data/MyInfo/MyInfo_Dependents.json";
import {myInfoImmigration} from "../../test-data/MyInfo/MyInfo_Immigration.json";
import { openSource_HeadersAndTitle_Data, menuFilter, myInfoTabName, myInfoContactDetails_Attachment ,myInfoPersonalDetails_Attachment,
    myInfoEmergencyContacts_Attachment, myInfoMemberships_Attahment, myInfoDependents_Attachment,
    myInfoImmigration_Attachment,myInfoQualifications_Attachment }from "../../test-data/components/OpenSource_Components.json";
import {myInfoMembership} from "../../test-data/MyInfo/MyInfo_Membership.json";
import {education, experience, language, license, skills} from "../../test-data/MyInfo/MyInfo_Qualifications.json";



test.describe("My Info Features", () => {
     test("Create and update MyInfo module", async ({loginFeature, openSource_MenuFilter, openSource_HeadersAndTitle,openSource_MyInfoTabs,
    myInfoPersonalDetailsTab, openSource_ToastMessage, openSource_Attachment, myInfoContactDetailsTab,
    myInfoEmergencyContactsTab, myInfoDependentsTab, myInfoQualificationsTab,myInfoImmigrationsTab,
myInfoMembershipTab}) => {

      await loginFeature.openPage();
        await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
          await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.loginHeader)).toBeVisible();
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo);
          await expect(openSource_HeadersAndTitle.titleHeader(openSource_HeadersAndTitle_Data.headerPersonalDetails)).toBeVisible();
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
