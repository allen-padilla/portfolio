import { Box, Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/page'

import DBLoginPic from '../public/projects/database/home.png'
import PortfolioPic from '../public/projects/portfolio/home.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={3}
          mb={6}
          align="center">
          These are all my projects! Past and present!
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} variant="page-title">
            Current Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="database"
              title="Web Database"
              thumbnail={DBLoginPic}
            >
              A web application that tracks inventory, clients, orders, and employee's stats.
              <br />
              <strong>Built using: <br /> Laravel | jQuery | AdminLTE</strong>
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="portfolio"
              title="Personal Portfolio"
              thumbnail={PortfolioPic}
            >
              My personal portfolio/blog, which I plan to improve as I learn more about web development.
              <br />
              <strong>Built using: <br /> React | NextJS | Chakra UI</strong>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects