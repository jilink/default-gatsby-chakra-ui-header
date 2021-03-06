import PropTypes from "prop-types"
import React from "react"
import { Link as ReachLink } from "gatsby"
import { navigate } from "gatsby"

import {
  Flex,
  Stack,
  Box,
  Text,
  Link,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import Logo from "./logo"

const MenuItemLink = ({ to = "/", children }) => {
  return <MenuItem onClick={() => navigate(to)}>{children}</MenuItem>
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

const LinkItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={ReachLink} to={to} style={{ boxShadow: "none" }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}
const MenuLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <LinkItem to="/link1">link 1</LinkItem>
      <LinkItem to="/link2">link 2</LinkItem>
      <Menu>
        <MenuButton
          colorScheme="teal"
          variant="link"
          as={Button}
          p={0}
          m={0}
          style={{ boxShadow: "none" }}
          rightIcon={<ChevronDownIcon />}
        >
          Dropdown
        </MenuButton>
        <MenuList color="secondary">
          <MenuItemLink to="/link1">link 1</MenuItemLink>
          <MenuItemLink to="/link2">link 2</MenuItemLink>
          <MenuItemLink to="/link3">link 3</MenuItemLink>
        </MenuList>
      </Menu>
      <LinkItem to="/link3">link3</LinkItem>
    </Stack>
  </Box>
)
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      mb={4}
      p={2}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  )
}
const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <header>
      <NavBarContainer bg="primary" color="white">
        <Logo w="100px" siteTitle={siteTitle} />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header
