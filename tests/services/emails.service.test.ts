import { SendMailOptions } from 'nodemailer';
import { EmailsService, GmailService } from '../../src/services'; // Asegúrate de importar la clase correctamente
import { HttpException } from '../../src/utils/errors'; // Importa HttpException o cualquier otra excepción necesaria

describe('EmailsService', () => {
  // Mock GmailService para simular su comportamiento
  const mockGmailService: GmailService = {
    buildTemplate: jest.fn(),
    sendEmailAsync: jest.fn(),
  };

  // Instancia EmailsService con el servicio simulado
  const emailsService = new EmailsService(mockGmailService);

  // Caso de prueba para sendConfirmationEmail
  it('should send a confirmation email', async () => {
    // Configura el comportamiento del servicio simulado (mockGmailService)
    mockGmailService.buildTemplate.mockReturnValue('HTML del correo');
    mockGmailService.sendEmailAsync.mockResolvedValue('Respuesta del servicio de correo');

    // Llama al método sendConfirmationEmail
    const result = await emailsService.sendConfirmationEmail();

    // Verifica que el servicio se llamó correctamente
    expect(mockGmailService.buildTemplate).toHaveBeenCalledWith({
      view: 'confirmation',
      context: { confirmationLink: 'aksdja' },
    });
    expect(mockGmailService.sendEmailAsync).toHaveBeenCalledWith(expect.any(Object));

    // Verifica que el resultado sea el esperado
    expect(result).toBe('Respuesta del servicio de correo');
  });

  // Agrega más casos de prueba según sea necesario
});
