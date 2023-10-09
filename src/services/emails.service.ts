import { boundClass } from 'autobind-decorator';
import type { SendMailOptions } from 'nodemailer';

import { HttpException } from '@utils/errors';
import { GmailService } from '@services';

@boundClass
class EmailsService {
  constructor(private gmailService: GmailService) {}

  public async sendConfirmationEmail(): Promise<void> {
    try {
      const options: SendMailOptions = {
        from: 'hernandez17.guillermo@gmail.com',
        to: 'hernandez.ic.g5@gmail.com',
        subject: 'Gracias por registrarte',
        html: this.gmailService.buildTemplate({ view: 'confirmation', context: { confirmationLink: 'aksdja' } }),
      };

      const response = await this.gmailService.sendEmailAsync(options);

      return response;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException({ error, message: error.response });
    }
  }
}

export default EmailsService;
