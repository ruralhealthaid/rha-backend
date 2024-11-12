import { Module } from "@nestjs/common";
import { ContactUsController } from "./contact-us.controller";
import { ConfigService } from "@nestjs/config";
import { ContactUsService } from "./contact-us.service";

@Module({
  controllers: [ContactUsController],
  providers: [ContactUsService],
})
export class ContactUsModule {}
