import { PartnershipRequestDto } from "./dto/request.dto";
import { EmailService } from "../email/email.service";
export declare class PartnershipService {
    private readonly emailService;
    constructor(emailService: EmailService);
    requestPartnership(dto: PartnershipRequestDto): Promise<string>;
}
