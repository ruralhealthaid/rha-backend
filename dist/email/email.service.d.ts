import { MailerService } from "@nestjs-modules/mailer";
import { PartnershipRequestDto } from "../partnership/dto/request.dto";
import { ConfigService } from "@nestjs/config";
export declare class EmailService {
    private readonly mailerService;
    private config;
    constructor(mailerService: MailerService, config: ConfigService);
    sendMail(dto: PartnershipRequestDto): Promise<{
        success: boolean;
    }>;
}
