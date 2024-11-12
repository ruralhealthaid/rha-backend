import { MailerService } from "@nestjs-modules/mailer";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SendEmailType } from "./types/types";

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private config: ConfigService
  ) {}

  async sendMail(data: SendEmailType) {
    try {
      await this.mailerService.sendMail({
        to: this.config.get<string>("RHA_EMAIL_USER"),
        subject: data.subject,
        template: data.template,
        context: data.context,
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
