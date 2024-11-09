import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EmailModule } from "./email/email.module";
import { PartnershipModule } from "./partnership/partnership.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PartnershipModule,
    EmailModule,
  ],
})
export class AppModule {}
