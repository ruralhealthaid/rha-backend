import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { SendEmailType } from "./types/types";
export declare class EmailService {
    private readonly mailerService;
    private config;
    constructor(mailerService: MailerService, config: ConfigService);
    sendMail(data: SendEmailType): Promise<{
        success: boolean;
    }>;
}
