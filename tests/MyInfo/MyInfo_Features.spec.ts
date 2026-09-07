import { expect } from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {
  LoginDataScenarios,
  headersTitles,
  menuFilter,
  myInfoTabName,
  myInfoPersonalDetail,
  myInfoPersonalDetails_CustomField,
  myInfoContactDetail,
  myInfoEmergencyContact,
  myInfoDependent,
  myInfoImmigration,
  myInfoMembership,
  attachment,
  experience,
  education,
  skill,
  language,
  license,
} from '../../test-data/index';



test.describe("My Info Features", () => {
     test("Create and update MyInfo module", async ({loginFeature, openSource_MenuFilter, openSource_HeadersAndTitle,openSource_MyInfoTabs,
    myInfoPersonalDetailsTab, openSource_ToastMessage, openSource_Attachment, myInfoContactDetailsTab,
    myInfoEmergencyContactsTab, myInfoDependentsTab, myInfoQualificationsTab,myInfoImmigrationsTab,
myInfoMembershipTab}) => {

      await loginFeature.openPage();
        await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible();
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerPersonalDetails)).toBeVisible();
            await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.personalDetails);
              await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetail.myInfoPersonalDetails);
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                await myInfoPersonalDetailsTab.updateCustomFields(myInfoPersonalDetails_CustomField.myInfoPersonalDetails_CustomFields);
                await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_Attachment.addAttachment(attachment.myInfoPersonalDetails_Attachment)
                await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.contactDetails);
              await myInfoContactDetailsTab.updateContactDetails(myInfoContactDetail.myInfoContactDetails);
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeVisible();
                await expect(openSource_ToastMessage.saveUpdateMessage).toBeHidden();
                await openSource_Attachment.addAttachment(attachment.myInfoContactDetails_Attachment);
                await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
              await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.emergencyContacts);
                await myInfoEmergencyContactsTab.addEmergencyContacts(myInfoEmergencyContact.myInfoEmergencyContacts);
                await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                    await openSource_Attachment.addAttachment(attachment.myInfoEmergencyContacts_Attachment)
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.dependents);
                  await myInfoDependentsTab.addDependents(myInfoDependent.myInfoDependents);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                    await openSource_Attachment.addAttachment(attachment.myInfoDependents_Attachment)
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.immigration);
                  await myInfoImmigrationsTab.addImmigration(myInfoImmigration.myInfoImmigrations);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                    await openSource_Attachment.addAttachment(attachment.myInfoImmigration_Attachment);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.qualifications);
                  await myInfoQualificationsTab.addExperience(experience.experiences);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await myInfoQualificationsTab.addEducation(education.educations);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await myInfoQualificationsTab.addSkill(skill.skills);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await myInfoQualificationsTab.addLanguage(language.languages);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await myInfoQualificationsTab.addLicense(license.licenses);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await openSource_Attachment.addAttachment(attachment.myInfoQualifications_Attachment);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.memberships);
                  await myInfoMembershipTab.addMembership(myInfoMembership.myInfoMemberships);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
                  await openSource_Attachment.addAttachment(attachment.myInfoMemberships_Attahment);
                    await expect(openSource_ToastMessage.saveTextMessage).toBeVisible();
                    await expect(openSource_ToastMessage.saveTextMessage).toBeHidden();
      });
});
