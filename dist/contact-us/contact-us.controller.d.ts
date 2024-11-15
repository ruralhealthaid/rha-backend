import { ContactUsService } from "./contact-us.service";
import { ContactUsDto } from "./dto/contact-us.dto";
export declare class ContactUsController {
    private contactService;
    constructor(contactService: ContactUsService);
    sendContactEmail(dto: ContactUsDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
