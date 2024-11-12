import { Test } from "@nestjs/testing";
import * as pactum from "pactum";
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PartnershipRequestDto } from "../src/partnership/dto/request.dto";
import { ContactUsDto } from "src/contact-us/dto/contact-us.dto";

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
    const dto: PartnershipRequestDto = {
      companyName: "test subject",
      contactPerson: "Louis Marie",
      contactEmail: "test@example.com",
      message: "test message",
    };
    describe("Correct email body", () => {
      it("should throw error when contact email not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.contactEmail;

        return pactum
          .spec()
          .post("/partnership/request")
          .withBody(dtoBody)
          .expectStatus(400);
      });
      it("should throw error when company name not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.companyName;

        return pactum
          .spec()
          .post("/partnership/request")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when contact person name not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.contactPerson;

        return pactum
          .spec()
          .post("/partnership/request")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when message not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.message;

        return pactum
          .spec()
          .post("/partnership/request")
          .withBody(dtoBody)
          .expectStatus(400);
      });
    });

    describe("Send email", () => {
      it("should send email", () => {
        return pactum
          .spec()
          .post("/partnership/request")
          .withBody(dto)
          .inspect()
          .expectStatus(201);
      });
    });
  });
  describe("Contact Us", () => {
    const dto: ContactUsDto = {
      firstName: "Joe",
      lastName: "Atia",
      email: "joeatia@gmail.com",
      phoneNumber: "+233558228479",
      message: "New complaint against staff.",
    };
    describe("Dto Check", () => {
      it("should throw error when first name not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.firstName;
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });
      it("should throw error when last name not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.lastName;
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when phone number not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.phoneNumber;
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when email not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.email;
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when email is invalid", () => {
        const dtoBody = { ...dto, email: "example@" };
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });

      it("should throw error when message not in body", () => {
        const dtoBody = { ...dto };
        delete dtoBody.message;
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dtoBody)
          .expectStatus(400);
      });
    });

    describe("Success Check", () => {
      it("should send message", () => {
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dto)
          .expectStatus(200);
      });

      it("should send message and return correct message", () => {
        return pactum
          .spec()
          .post("/contact-us")
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(
            "Message received successfully. We will contact you shortly"
          );
      });
    });
  });
});
