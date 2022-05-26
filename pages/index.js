import { Navbar } from "../components/navbar";
import NextLink from "next/link"
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import Layout from '../components/layouts/page'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { LanguageSection, LanguageOut, LanguageDescription } from "../components/languages";

const Page = () => {
  return (
    <Layout >
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={3}
          mb={6}
          align="center">
          Hello! I&apos;m a full-stack developer based in Winnipeg, Manitoba! <br />I am currently seeking a new developer position!
        </Box>
        <Section delay={0.3}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Allen Padilla
              </Heading>
              <p>Developer, Traveler, Ramen Lover</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/profile.jpg"
                alt="Profile Image" />
            </Box>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m Allen!

          </Paragraph>

          <Box mt={4} align="center">
            <NextLink href="/projects">
              <Button w={250} colorScheme="cyan" rightIcon={<ChevronRightIcon />}>Projects</Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>
              1999
            </BioYear>
            Born in Winnipeg, Manitoba.
          </BioSection>
          <BioSection>
            <BioYear>
              2019
            </BioYear>
            Completed Business Information Technology at Red River College
          </BioSection>
          <BioSection>
            <BioYear>
              2020 - Present
            </BioYear>
            Working as a full-stack developer at Computers for Schools Manitoba
          </BioSection>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Languages
          </Heading>

          <Box mb={4}>
            <LanguageSection>
              <LanguageOut>
                PHP | Laravel | Xampp
              </LanguageOut>
            </LanguageSection>
            <LanguageDescription>
              My first professional project was to create a simple pure PHP database app.
              With very little knowledge from school, I read, learned and grew my knowledge of PHP tremendously. <br />
              Later on this simple database was recognized by the Executive Director, where it transitioned from my own simple PHP framework to a full application using Laravel used by all Manitoba locations.
            </LanguageDescription>
            <Box mt={4} align="center">
              <NextLink href="/projects/database">
                <Button w={250} colorScheme="cyan" rightIcon={<ChevronRightIcon />}>Read More</Button>
              </NextLink>
            </Box>
          </Box>

          <Box mb={4}>
            <LanguageSection>
              <LanguageOut>
                JavaScript | React
              </LanguageOut>
            </LanguageSection>
            <LanguageDescription>
              I first learned JavaScript in 2017 when I was in school at Red River College, using only Vanilla JS and basic DOM manipulation. <br />

            </LanguageDescription>
          </Box>

          <Box mb={4}>
            <LanguageSection>
              <LanguageOut>
                C# | Visual Studio
              </LanguageOut>
            </LanguageSection>
            <LanguageDescription>
            </LanguageDescription>
          </Box>

          <Box mb={4}>
            <LanguageSection>
              <LanguageOut>
                Ruby | Ruby On Rails
              </LanguageOut>
            </LanguageSection>
            <LanguageDescription>
            </LanguageDescription>
          </Box>

        </Section>
      </Container >
    </Layout >
  );
};

export default Page;
