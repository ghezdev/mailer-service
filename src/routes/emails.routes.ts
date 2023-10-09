import { Router } from 'express';

import { EmailsService, GmailService } from '@services';
import { EmailsController } from '@controllers';

const router = Router();

const emailsController = new EmailsController(new EmailsService(new GmailService()));

router.post('/confirmation', emailsController.sendConfirmationEmail);

export default router;
