import { Navbar } from "../components/navbar";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={3}
        mb={6}
        align="center">
        Hey! I&apos;m a full-stack developer based in Winnipeg, Manitoba!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Allen Padilla
          </Heading>
          <p>Developer & Ramen connoisseur</p>
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
            src="/images/profile.png"
            alt="Profile Image" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Allen is a passionate full-stack developer, constantly learning the new technology to further hone his skills as a developer.
        </Paragraph>

        <Box mt={4} align="center">
          <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>Checkout GitHub</Button>
        </Box>
      </Section>

      <Section delay={0.2}>
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Current Languages
        </Heading>
      </Section>
    </Container >
  );
};

export default Page;
