import { Box, Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/page'


const Database = () => {
  return (
    <Layout>
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

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Database