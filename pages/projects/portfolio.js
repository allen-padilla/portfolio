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
} from "@chakra-ui/react";
import Section from "../../components/section";
import Layout from "../../components/layouts/page";
import { ChevronRightIcon } from "@chakra-ui/icons";

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

        <Section delay={0.2}>
          <List mt={4}>
            <ListItem>
              <Badge colorScheme="whatsapp">Website</Badge> <a href="https://www.apadilla.ca/">https://www.apadilla.ca/</a>
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Platform</Badge>
              Any mobile browser
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Stack</Badge> React, Next.js, Chakra UI, Framer Motion
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Portfolio;
