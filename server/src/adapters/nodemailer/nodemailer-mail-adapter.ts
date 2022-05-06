import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '41d63885c631ba',
        pass: 'c76cd2f30d4915',
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Fidget <oi@feedget.com>',
            to: 'Edson Jr <edsonaj09@gmail.com>',
            subject,
            html: body,
        });
    }
}
