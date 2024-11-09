import { Injectable } from "@nestjs/common";
import { PartnershipRequestDto } from "./dto/request.dto";
import { EmailService } from "../email/email.service";

@Injectable()
export class PartnershipService {
  constructor(private readonly emailService: EmailService) {}

  async requestPartnership(dto: PartnershipRequestDto) {
    await this.emailService.sendMail(dto);
    return "Email send successfully";
  }
}
