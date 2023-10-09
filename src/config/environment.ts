import dotenv from 'dotenv';

dotenv.config();

function checkEnvVariables(variables: string[]) {
  for (const variable of variables) {
    if (!process.env[variable]) {
      throw new Error(`Variable de entorno faltante: ${variable}`);
    }
  }
}

const requiredEnvVariables = ['PORT', 'NODEMAILER_USER', 'NODEMAILER_PASS'];

checkEnvVariables(requiredEnvVariables);
