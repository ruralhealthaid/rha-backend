import { ContactUsDto } from "src/contact-us/dto/contact-us.dto";
import { PartnershipRequestDto } from "src/partnership/dto/request.dto";

export type SendEmailType = {
  subject: string;
  template: string;
  context: PartnershipRequestDto | ContactUsDto;
};
