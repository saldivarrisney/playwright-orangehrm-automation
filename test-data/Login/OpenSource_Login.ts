import { ENV_OpenSource } from "../../config/env"


export const LoginDataScenarios = {
        validCredentials: {
            username: ENV_OpenSource.openSource_username,
            password: ENV_OpenSource.openSource_password
        },
            invalidUsername: {
            username: 'wrong_user',
            password: ENV_OpenSource.openSource_password
        },
        invalidPassword: {
            username: ENV_OpenSource.openSource_username,
            password: 'wrong_password'
        },
    
        invalidCredentials: {
            username: 'wrong_user',
            password: 'wrong_password'
        },
        noPassword: {
          username: ENV_OpenSource.openSource_username,
            password: ''
        },
        noUsername: {
            username: '',
            password: ENV_OpenSource.openSource_password
        },
        noCredentials: {
            username: '',
            password: ''
        },


    }

