import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ContactUsService } from "./contact-us.service";
import { ContactUsDto } from "./dto/contact-us.dto";

@Controller("contact-us")
export class ContactUsController {
  constructor(private contactService: ContactUsService) {}

  @HttpCode(HttpStatus.OK)
  @Post("")
  async sendContactEmail(@Body() dto: ContactUsDto) {
    return await this.contactService.sendContactEmail(dto);
  }
}
