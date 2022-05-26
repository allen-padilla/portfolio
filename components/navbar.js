import Logo from "../components/logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <LinkItem href="/">
              Allen Padilla
            </LinkItem>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/feed/"
            path={path}
          >
            LinkedIn
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/allen-padilla/portfolio"
            path={path}
          >
            Source Code
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Menu"
              />
              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects">
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/allen-padilla/portfolio"
                  target="_blank"
                >
                  Portfolio
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
