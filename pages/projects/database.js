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
      <Container mt={4}>
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
                <Badge colorScheme="whatsapp" ml={2}>2020 - </Badge>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Section>

        <Section delay={0.2}>
          <Paragraph>
            This web database application was built to replace an older Microsoft Access database, that was severely outdated, and could no longer be updated.
          </Paragraph>
          <Paragraph>
            Development at the start of this project took me quite a bit of time to get started, as I had to re-learn how to use PHP, and to research all sorts of security vulnerabilities.
            All of this research was needed as I initially was making my own framework for this database, but later I transitioned over to Laravel.
          </Paragraph>
          <Paragraph>
            Gradually I improved my abilities with Laravel, and it's Eloquent model, quickly adding features, fixing bugs and adding in quality of life improvements everyday.
          </Paragraph>
          <Paragraph>
            This application is hosted locally on a Windows Server, where I have created Batch scripts to backup MySQL daily, and to get new versions when I push them.
          </Paragraph>

          <List mt={4}>
            <ListItem>
              <Badge colorScheme="whatsapp">Website</Badge> Internal Application
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Platform</Badge>
              Windows/MacOS/Mobile
            </ListItem>
            <ListItem>
              <Badge colorScheme="whatsapp">Stack</Badge> Laravel,
              JavaScript (jQuery), AdminLTE, MySQL (phpMyAdmin)
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
