import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from '../../components/section'
import Layout from '../../components/layouts/page'


const Database = () => {
  return (
    <Layout title="Web Database">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={3}
          mb={6}
          align="center">
          Mini build blog for my Web Database
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} variant="page-title">
            Web Database
          </Heading>
        </Section>

      </Container>
    </Layout>
  )
}

export default Database