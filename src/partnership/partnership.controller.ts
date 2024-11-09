import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { PartnershipRequestDto } from "./dto/request.dto";
import { PartnershipService } from "./partnership.service";

@Controller("partnership")
export class PartnershipController {
  constructor(private partnershipService: PartnershipService) {}
  @HttpCode(HttpStatus.OK)
  @Post("request")
  async partnershipRequest(@Body() dto: PartnershipRequestDto) {
    return await this.partnershipService.requestPartnership(dto);
  }
}
