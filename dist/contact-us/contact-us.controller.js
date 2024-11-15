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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsController = void 0;
const common_1 = require("@nestjs/common");
const contact_us_service_1 = require("./contact-us.service");
const contact_us_dto_1 = require("./dto/contact-us.dto");
let ContactUsController = class ContactUsController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    async sendContactEmail(dto) {
        return await this.contactService.sendContactEmail(dto);
    }
};
exports.ContactUsController = ContactUsController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_us_dto_1.ContactUsDto]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "sendContactEmail", null);
exports.ContactUsController = ContactUsController = __decorate([
    (0, common_1.Controller)("contact-us"),
    __metadata("design:paramtypes", [contact_us_service_1.ContactUsService])
], ContactUsController);
("http://localhost:3333/contact-us/");
//# sourceMappingURL=contact-us.controller.js.map