import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Profile from '../public/images/profile.png'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3">
        Projects & Past Work
      </Heading>
      <SimpleGrid
        column={[1, 1, 2]}
        gap={6}
      >
        <Section delay={0.1}>
          <WorkGridItem id="database" title="database" thumbnail={Profile}>
            An all-in-one database application combining business requirements from catalouging information, to
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="database" title="database" thumbnail={Profile}>
            Yup
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects