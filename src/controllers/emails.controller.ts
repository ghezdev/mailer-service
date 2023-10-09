import { NextFunction, Request, Response } from 'express';
import { boundClass } from 'autobind-decorator';

import { EmailsService } from '@services';

@boundClass
class EmailsController {
  constructor(private emailsService: EmailsService) {}

  public async sendConfirmationEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.emailsService.sendConfirmationEmail();
      res.status(201).json({ message: 'email sent!' });
    } catch (error) {
      next(error);
    }
  }
}

export default EmailsController;
