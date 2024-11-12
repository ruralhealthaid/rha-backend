import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EmailModule } from "./email/email.module";
import { PartnershipModule } from "./partnership/partnership.module";
import { ContactUsModule } from "./contact-us/contact-us.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EmailModule,
    PartnershipModule,
    ContactUsModule,
  ],
})
export class AppModule {}
