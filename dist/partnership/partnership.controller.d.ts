import { PartnershipRequestDto } from "./dto/request.dto";
import { PartnershipService } from "./partnership.service";
export declare class PartnershipController {
    private partnershipService;
    constructor(partnershipService: PartnershipService);
    partnershipRequest(dto: PartnershipRequestDto): Promise<string>;
}
