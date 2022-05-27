import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Badge,
  List,
  ListItem,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";
import NextLink from 'next/link'
import Section from "../../components/section";
import Layout from "../../components/layouts/page";
import Paragraph from "../../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Database = () => {
  return (
    <Layout title="Web Database">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mt={3}
          mb={6}
          align="center"
        >
          Mini build blog for my Web Database
        </Box>

        <Section delay={0.1}>
          <Breadcrumb spacing="2px" separator={<ChevronRightIcon color="green.500" />}>
            <BreadcrumbItem>
              <NextLink href="/projects">
                <BreadcrumbLink>Projects</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize={20}>
                Web Database
                <Badge colorScheme="whatsapp" ml={2}>2020 - Present</Badge>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Section>

        <Section delay={0.2}>
          <List>
            <ListItem>
              <Badge colorScheme="whatsapp">Website</Badge> Internal Application
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Platform</Badge>{" "}
              Windows/MacOS/Mobile
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Stack</Badge> XAMPP: Laravel,
              jQuery, AdminLTE, MySQL (phpMyAdmin)
            </ListItem>
          </List>
        </Section>

        <Section delay={0.5}>
          <Image
            src="/projects/database/home.png"
            mt={2}
            borderRadius={12}
            alt="Web database screenshot of home page"
          />
          <Image
            src="/projects/database/donations.png"
            mt={2}
            borderRadius={12}
            alt="Web database screenshot of donations page"
          />
          <Image
            src="/projects/database/materials.png"
            mt={2}
            borderRadius={12}
            alt="Web database screenshot of materials page"
          />
          <Image
            src="/projects/database/orders.png"
            mt={2}
            borderRadius={12}
            alt="Web database screenshot of orders page"
          />
          <Image
            src="/projects/database/rma.png"
            mt={2}
            borderRadius={12}
            alt=""
          />
        </Section>
      </Container>
    </Layout >
  );
};

export default Database;
