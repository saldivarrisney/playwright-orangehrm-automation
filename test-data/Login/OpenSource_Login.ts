import { ENV_SouceDemo } from "../../config/env";

export const LoginDataScenarios = {
    invalidUsername: {
            username: 'wrong_user',
            password: ENV_SouceDemo.source_password
        },
    
        invalidPassword: {
            username: ENV_SouceDemo.source_username,
            password: 'wrong_password'
        },
    
        invalidCredentials: {
            username: 'wrong_user',
            password: 'wrong_password'
        },
        noPassword: {
          username: ENV_SouceDemo.source_username,
            password: ''
        },
        noUsername: {
            username: '',
            password: ENV_SouceDemo.source_password
        },
        noCredentials: {
            username: '',
            password: ''
        },

        validCredentials: {
            username: ENV_SouceDemo.source_username,
            password: ENV_SouceDemo.source_password
        },
           loginHeader: 'Dashboard',

    };

