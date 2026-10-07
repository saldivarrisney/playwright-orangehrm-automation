import { expect } from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import {LoginDataScenarios,headersTitles, menuFilter,myInfoTabName,myInfoPersonalDetails,
  myInfoPersonalDetails_CustomFields,myInfoContactDetails,myInfoEmergencyContacts,myInfoDependents,
  myInfoImmigrations,myInfoMemberships,attachment,experiences,educations,skills,
  languages,licenses} from '../../test-data/index';


test.describe("My Info Features", () => {
     test("Create and update MyInfo module", async ({loginFeature, openSource_MenuFilter, openSource_HeadersAndTitle,openSource_MyInfoTabs,
    myInfoPersonalDetailsTab, openSource_Attachment, myInfoContactDetailsTab,
    myInfoEmergencyContactsTab, myInfoDependentsTab, myInfoQualificationsTab,myInfoImmigrationsTab,
myInfoMembershipTab}) => {
  test.setTimeout(600_000);
      await loginFeature.openPage();
        await loginFeature.logIn(LoginDataScenarios.validCredentials.username,LoginDataScenarios.validCredentials.password,);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.loginHeader)).toBeVisible
        await openSource_MenuFilter.searchAndSelectMenu(menuFilter.myInfo);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerPersonalDetails)).toBeVisible
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.personalDetails);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerPersonalDetails)).toBeVisible
            await myInfoPersonalDetailsTab.updatePersonalDetails(myInfoPersonalDetails.myInfoPersonalDetails);
              await expect(await myInfoPersonalDetailsTab.verifyTheUpdatedPersonalDetails(myInfoPersonalDetails.myInfoPersonalDetails.firstName,myInfoPersonalDetails.myInfoPersonalDetails.lastName )).toBeVisible()
            await myInfoPersonalDetailsTab.updateCustomFields(myInfoPersonalDetails_CustomFields.myInfoPersonalDetails_CustomFields);
              await expect(myInfoPersonalDetailsTab.verifyTheUpdatedCustomFields(myInfoPersonalDetails_CustomFields.myInfoPersonalDetails_CustomFields.bloodType)).toBeVisible()
            await openSource_Attachment.addAttachment(attachment.myInfoPersonalDetails_Attachment)
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoPersonalDetails_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.contactDetails);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerContactDetails)).toBeVisible
            await myInfoContactDetailsTab.updateContactDetails(myInfoContactDetails.myInfoContactDetails);
            const contactFields = await myInfoContactDetailsTab.getContactDetailsFields();//create const to call the method inside from the page
              await expect(contactFields.street1).toHaveValue(myInfoContactDetails.myInfoContactDetails.street1);
              await expect(contactFields.street2).toHaveValue(myInfoContactDetails.myInfoContactDetails.street2);
              await expect(contactFields.city).toHaveValue(myInfoContactDetails.myInfoContactDetails.city);
              await expect(contactFields.stateProvince).toHaveValue(myInfoContactDetails.myInfoContactDetails.stateProvince);
            await openSource_Attachment.addAttachment(attachment.myInfoContactDetails_Attachment);
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoContactDetails_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.emergencyContacts);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerEmergencyContacts)).toBeVisible
            await myInfoEmergencyContactsTab.addEmergencyContacts(myInfoEmergencyContacts.myInfoEmergencyContacts);
              await expect(myInfoEmergencyContactsTab.verifyTheEmergencyContacts(myInfoEmergencyContacts.myInfoEmergencyContacts.name)).toBeVisible()
            await openSource_Attachment.addAttachment(attachment.myInfoEmergencyContacts_Attachment)
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoEmergencyContacts_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.dependents);
          await expect(openSource_HeadersAndTitle.titleHeader(headersTitles.headerDependents)).toBeVisible
            await myInfoDependentsTab.addDependents(myInfoDependents.myInfoDependents);
              await expect(myInfoDependentsTab.verifyTheDependents(myInfoDependents.myInfoDependents.name)).toBeVisible()
            await openSource_Attachment.addAttachment(attachment.myInfoDependents_Attachment) 
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoDependents_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.immigration);
          await expect (openSource_HeadersAndTitle.titleHeader(headersTitles.headerImmigration)).toBeVisible
            await myInfoImmigrationsTab.addImmigration(myInfoImmigrations.myInfoImmigrations);
                await expect(myInfoImmigrationsTab.verifyTheImmigration(myInfoImmigrations.myInfoImmigrations.document, myInfoImmigrations.myInfoImmigrations.number)).toBeVisible();            
                await openSource_Attachment.addAttachment(attachment.myInfoImmigration_Attachment);               
                  await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoImmigration_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.qualifications);
            await expect (openSource_HeadersAndTitle.titleHeader(headersTitles.headerQualification)).toBeVisible
            await myInfoQualificationsTab.addExperience(experiences.experiences);
              await expect(myInfoQualificationsTab.verifyTheExperience(experiences.experiences.company,experiences.experiences.jobTitle)).toBeVisible()
            await myInfoQualificationsTab.addEducation(educations.educations);
              await expect(myInfoQualificationsTab.verifyTheEducation(educations.educations.level,educations.educations.year,educations.educations.gpaScore)).toBeVisible()
            await myInfoQualificationsTab.addSkill(skills.skills);
              await expect(myInfoQualificationsTab.verifyTheSkill(skills.skills.skill)).toBeVisible()
            await myInfoQualificationsTab.addLanguage(languages.languages);
              await expect(myInfoQualificationsTab.verifyTheLanguage(languages.languages.language)).toBeVisible()
            await myInfoQualificationsTab.addLicense(licenses.licenses);
              await expect(myInfoQualificationsTab.verifyTheLicense(licenses.licenses.licenseType)).toBeVisible()
            await openSource_Attachment.addAttachment(attachment.myInfoQualifications_Attachment);
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoQualifications_Attachment.attachmentFile)).toBeVisible()
        await openSource_MyInfoTabs.myInfoTabs(myInfoTabName.memberships);
          await expect (openSource_HeadersAndTitle.titleHeader(headersTitles.headerMembership)).toBeVisible
            await myInfoMembershipTab.addMembership(myInfoMemberships.myInfoMemberships);
              await expect(myInfoMembershipTab.verifyTheMembership(myInfoMemberships.myInfoMemberships.membership)).toBeVisible()
            await openSource_Attachment.addAttachment(attachment.myInfoMemberships_Attahment);
              await expect(openSource_Attachment.verifyTheUploadedAttachment(attachment.myInfoMemberships_Attahment.attachmentFile)).toBeVisible()

  });
});
