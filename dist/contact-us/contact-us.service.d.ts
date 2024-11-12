import { EmailService } from "../email/email.service";
import { ContactUsDto } from "./dto/contact-us.dto";
export declare class ContactUsService {
    private emailService;
    constructor(emailService: EmailService);
    sendContactEmail(dto: ContactUsDto): Promise<string>;
}
