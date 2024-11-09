import { Test } from "@nestjs/testing";
import * as pactum from "pactum";
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { EmailDto } from "src/email/dto/email.dto";

describe("app e2e", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    await app.listen(3333);
    pactum.request.setBaseUrl("http://localhost:3333");
  });

  afterAll(async () => {
    app.close();
  });

  describe("Email", () => {
    const dto: EmailDto = {
      email: "test@example.com",
      name: "test subject",
      message: "test message",
    };
    describe("Correct email body", () => {
      it("should throw error when email not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.email;

        return pactum.spec().post("/email").withBody(dtoBody).expectStatus(400);
      });
      it("should throw error when name not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.name;

        return pactum.spec().post("/email").withBody(dtoBody).expectStatus(400);
      });
      it("should throw error when message not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.message;

        return pactum.spec().post("/email").withBody(dtoBody).expectStatus(400);
      });
    });

    describe("Send email", () => {
      it("should send email", () => {
        return pactum.spec().post("/email").withBody(dto).expectStatus(201);
      });
    });
  });
});
