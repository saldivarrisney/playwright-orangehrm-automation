import { UserData, UpdateUserData } from "../../types/Admin/Admin_UserManagement"


export const addAdminUser: UserData= {
    userRole: 'Admin',
    employeeName: 'Demo Open Source',
    status: 'Enabled',
    username: 'DemoPH',
    password: 'Demo@123',
    confirmPassword: 'Demo@123',
}
export const addNonAdminUser: UserData= {
    userRole: 'ESS',
    employeeName: 'Demo Open Source',
    status: 'Enabled',
    username: 'DemoNonAdminPH',
    password: 'Demo@123',
    confirmPassword: 'Demo@123',
}
export const navigateCreationOfUSer= {
    clickUsersHeader: 'User',
    headerTitle: 'Add User',
}
export const updateNonAdminUser:UpdateUserData = {
    updateUsername: 'UpdateDemoNonAdminPH',
    updatePassword: 'Demo@122',
    updateConfirmPassword: 'Demo@122',
}
export const updateAdminUser:UpdateUserData = {
    updateUsername: 'UpdateDemoPH',
    updatePassword: 'Demo@124',
    updateConfirmPassword: 'Demo@124',
}