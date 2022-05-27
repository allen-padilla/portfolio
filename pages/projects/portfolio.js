import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Badge,
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
      </Container>
    </Layout>
  );
};

export default Portfolio;
