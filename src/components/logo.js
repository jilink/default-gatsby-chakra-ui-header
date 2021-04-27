import React from "react"
import { Link as ReachLink } from "gatsby"
import { Link, Box, Image } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = ({ siteTitle, ...props }) => (
  <Box {...props}>
    <Link as={ReachLink} to="/" style={{ boxShadow: "none" }}>
      <StaticImage
        src="../images/gatsby-icon.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="LOGO"
      />
    </Link>
  </Box>
)

export default Logo
