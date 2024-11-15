"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnershipService = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../email/email.service");
let PartnershipService = class PartnershipService {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async requestPartnership(dto) {
        const emailData = {
            template: "./partnership-request.hbs",
            context: dto,
            subject: `Partnership Request from ${dto.companyName}`,
        };
        await this.emailService.sendMail(emailData);
        return { success: true, message: "Email send successfully" };
    }
};
exports.PartnershipService = PartnershipService;
exports.PartnershipService = PartnershipService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], PartnershipService);
//# sourceMappingURL=partnership.service.js.map