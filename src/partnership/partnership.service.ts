import { Injectable } from "@nestjs/common";
import { PartnershipRequestDto } from "./dto/request.dto";
import { EmailService } from "../email/email.service";
import { SendEmailType } from "src/email/types/types";

@Injectable()
export class PartnershipService {
  constructor(private readonly emailService: EmailService) {}

  async requestPartnership(dto: PartnershipRequestDto) {
    const emailData: SendEmailType = {
      template: "./partnership-request.hbs",
      context: dto,
      subject: `Partnership Request from ${dto.companyName}`,
    };
    await this.emailService.sendMail(emailData);
    return "Email send successfully";
  }
}
