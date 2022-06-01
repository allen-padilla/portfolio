import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Badge,
  List,
  ListItem,
  Image
} from "@chakra-ui/react";
import Section from "../../components/section";
import Layout from "../../components/layouts/page";
import Paragraph from "../../components/paragraph";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Portfolio = () => {
  return (
    <Layout title="Personal Portfolio">
      <Container mt={4}>
        <Section delay={0.1}>
          <Breadcrumb
            spacing="2px"
            separator={<ChevronRightIcon color="green.500" />}
          >
            <BreadcrumbItem>
              <NextLink href="/projects">
                <BreadcrumbLink>Projects</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize={20}>
                Personal Portfolio
                <Badge colorScheme="whatsapp" ml={2}>
                  2022 -
                </Badge>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Section>
        <Section>
          <Paragraph>
            This whole website is my personal portfolio page! It was created
            using Next.js and using Chakra UI for design. Currently this page is
            hosted using Vercel, with my domain name purchased from Google
            Domains.
          </Paragraph>
          <Paragraph>
            Some components are styled using the styled componenet library,
            while some are altering different premade functionality in Chakra
            UI. I plan to add more projects and even a travel blog part, where I
            can document different trips I go on!
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <List mt={4}>
            <ListItem>
              <Badge colorScheme="whatsapp">Website</Badge>{" "}
              <a href="https://www.apadilla.ca/" color="purple">
                https://www.apadilla.ca/
              </a>
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Source Code</Badge>{" "}
              <a
                href="https://github.com/allen-padilla/portfolio"
                target="_blank"
              >
                GitHub <ExternalLinkIcon mx="2px" />
              </a>
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Platform</Badge> Any recently
              updated browser
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Stack</Badge> React, Next.js, Chakra
              UI, Framer Motion
            </ListItem>
          </List>
        </Section>

        <Section delay={0.4}>
          (Light Mode)
          <Image src="/projects/portfolio/lightmode.png" />
          (Dark Mode)
          <Image src="/projects/portfolio/darkmode.png" />
        </Section>
      </Container>
    </Layout>
  );
};

export default Portfolio;
