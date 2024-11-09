import { MailerService } from "@nestjs-modules/mailer";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PartnershipRequestDto } from "../partnership/dto/request.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private config: ConfigService
  ) {}

  async sendMail(dto: PartnershipRequestDto) {
    try {
      await this.mailerService.sendMail({
        to: this.config.get<string>("RHA_EMAIL_USER"),
        subject: `Partnership Request from ${dto.companyName}`,
        template: "./partnership-request.hbs",
        context: dto,
      });
      return {
        success: true,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
