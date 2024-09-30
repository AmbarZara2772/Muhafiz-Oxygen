import { BRAND_NAME, FACEBOOK_URL, PHONE_NUMBER } from "@/utils/constants";

import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Img,
  Link,
  Head
} from "@react-email/components";

const ContactUsEmailTemplate = ({ name }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#ffffff", padding: "32px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Section>
            <Img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo/favicon.png`}
              alt={`${BRAND_NAME} Logo`}
              style={{
                margin: "0 auto",
                marginBottom: "16px",
                width: "96px",
                textAlign: "center"
              }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center"
              }}
            >
              Thank You for Reaching Out to {BRAND_NAME}!
            </Text>
            <Img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/illustrations/call-center.png`}
              alt="Call Center Support Team"
              width={100}
              height={100}
              style={{
                margin: "0 auto",
                marginBottom: "16px",
                width: "192px",
                height: "auto",
                textAlign: "center"
              }}
            />
            <Text style={{ marginBottom: "16px" }}>
              Dear {name},<br />
              Thank you for getting in touch with us! Your message is important,
              and we want to assure you that we have received your inquiry. A
              member of our Customer Support Team will review your message and
              get back to you within the next 24 hours.
            </Text>
            <Text style={{ marginBottom: "16px" }}>
              If your inquiry is urgent and requires immediate assistance,
              please don&apos;t hesitate to call us directly at{" "}
              <strong>{PHONE_NUMBER}</strong>. We&apos;re here to help.
            </Text>
            <Text style={{ marginBottom: "16px" }}>
              In the meantime, you might find quick answers to your questions in
              our{" "}
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/contact#faqs`}
                target={"_blank"}
                style={{ color: "#0000EE", textDecoration: "underline" }}
              >
                FAQ section
              </Link>
              . It&apos;s packed with information that could be just what
              you&apos;re looking for!
            </Text>
            <Text style={{ marginBottom: "16px" }}>
              Stay connected with us for updates, tips, and more by following
              our{" "}
              <Link
                href={FACEBOOK_URL}
                target={"_blank"}
                style={{ color: "#0000EE", textDecoration: "underline" }}
              >
                Facebook page
              </Link>
              .
            </Text>
            <Text style={{ marginBottom: "16px" }}>
              Once again, thank you for contacting {BRAND_NAME}. We appreciate
              your effort to reach out and are eager to assist you as soon as
              possible.
            </Text>
            <Text>Warm regards,</Text>
            <Text>The Support Team at {BRAND_NAME}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsEmailTemplate;
