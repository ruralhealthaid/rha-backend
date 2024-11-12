import { Body, Controller, Post } from "@nestjs/common";
import { ContactUsService } from "./contact-us.service";
import { ContactUsDto } from "./dto/contact-us.dto";

@Controller("contact-us")
export class ContactUsController {
  constructor(private contactService: ContactUsService) {}

  @Post("")
  async sendContactEmail(@Body() dto: ContactUsDto) {
    return await this.contactService.sendContactEmail(dto);
  }
}
