export type FilterAdminModule= {
    searchField: string;
}

export type NavigateCreationOfUSer= {
    clickUsersHeader: string;
    headerTitle: string;
}

export type UserData= {
    userRole: string;
    employeeName: string;
    status: string;
    username: string;
    password: string;
    confirmPassword: string;
}


export type UpdateUserData = {
    updateUsername: string;
    updatePassword: string;
    updateConfirmPassword: string;
}