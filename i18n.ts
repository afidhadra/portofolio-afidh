import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(({ locale }) => {
  locale = locale || 'en';
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    messages,
    locale: locale as string,
    timeZone: 'Asia/Jakarta'
  };
});