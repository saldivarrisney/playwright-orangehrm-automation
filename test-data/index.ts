//test-data/index.ts
//login
export { LoginDataScenarios } from './login/OpenSource_Login';
//components
export { headersTitles } from './components/headersTitle';
export { menuFilter } from './components/menuFilter';
export { myInfoTabName } from './components/myInfoTabName';
export { attachment } from './components/attachments/attachments';
export {navigateCreationOfUser} from './components/buttons';
export {toastMessage} from './components/toastMessage'
//Admin_users
export {createUser}from './admin/createUsers';
export {updateUser}from './admin/updateUsers';


//myInfo
export { myInfoPersonalDetails } from './myInfo/Personal Details/PersonalDetails';
export { myInfoPersonalDetails_CustomFields } from './myInfo/Personal Details/CustomFields';
export { myInfoContactDetails } from './myInfo/Contact Details/ContactDetails';
export { myInfoEmergencyContacts } from './myInfo/Emergency Contacts/EmergencyContacts';
export { myInfoDependents } from './myInfo/Dependents/Dependents';
export { myInfoImmigrations } from './myInfo/Immigrations/Immigrations';
export { myInfoMemberships } from './myInfo/Memberships/Memberships';
export { experiences } from './myInfo/Qualifications/Experiences';
export { educations } from './myInfo/Qualifications/Educations';
export { skills } from './myInfo/Qualifications/Skills';
export { languages } from './myInfo/Qualifications/Languages';
export { licenses } from './myInfo/Qualifications/Licenses';
//pim
export {createEmployee} from './pim/CreateEmployee';
export {deleteSpecificRecord} from './pim/DeleteSpecificRecord';
export {updateEmployee} from './pim/Update_Employee';
export {massCreateOfEmployee} from './pim/CreateEmployee_MassCreation';