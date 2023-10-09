import { readFileSync } from 'fs';
import { compile } from 'handlebars';
import { createTransport } from 'nodemailer';
import type { Transporter, SendMailOptions } from 'nodemailer';
import path from 'path';

import { ITemplates } from '@interfaces/templates';

class GmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      service: 'Gmail',
      auth: { user: 'hernandez17.guillermo@gmail.com', pass: 'fztp ejhg gpqq wcbj' },
    });
  }

  public buildTemplate({ view, context }: ITemplates): string {
    const viewPath = path.resolve(process.cwd(), 'src', 'views', `${view}.email.hbs`);
    const file = readFileSync(viewPath, 'utf8');
    const compiledTemplate = compile(file);

    return compiledTemplate(context);
  }

  public sendEmailAsync(options: SendMailOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.transporter.sendMail(options, (error, info) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(info);
      });
    });
  }
}

export default GmailService;
