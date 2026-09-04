import dotenv from 'dotenv';

dotenv.config({path: '.env.qa'});

export const ENV_OpenSource = {
openSource_username: process.env.openSource_username!,
openSource_password: process.env.openSource_password!,
openSource_url: process.env.openSource_url!,
}; 