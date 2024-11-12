import { Injectable } from "@nestjs/common";
import { EmailService } from "../email/email.service";
import { ContactUsDto } from "./dto/contact-us.dto";
import { SendEmailType } from "../email/types/types";

@Injectable()
export class ContactUsService {
  constructor(private emailService: EmailService) {}

  async sendContactEmail(dto: ContactUsDto) {
    const emailData: SendEmailType = {
      context: dto,
      subject: `Contact Message from ${dto.firstName} ${dto.lastName}`,
      template: "./contact-us.hbs",
    };
    await this.emailService.sendMail(emailData);
    return "Message received successfully. We will contact you shortly";
  }
}
