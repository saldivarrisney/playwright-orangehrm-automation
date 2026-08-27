import dotenv from 'dotenv';

dotenv.config({path: '.env.qa'});

export const ENV = {
    baseUrl: process.env.BASE_URL!,
    sauce_username: process.env.SAUCE_USERNAME!,
    sauce_password: process.env.SAUCE_PASSWORD!,
};

export const ENV_SouceDemo = {
    source_url: process.env.openSource_url!,
    source_username: process.env.openSource_username!,
    source_password: process.env.openSource_password!,
};
