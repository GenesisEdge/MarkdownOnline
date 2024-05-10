import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import HomeIcon from "@mui/icons-material/Home"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import GrainIcon from "@mui/icons-material/Grain"
import { Box } from "@mui/material"

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  //   console.info("You clicked a breadcrumb.")
  //   console.log(event)
}

export default function IconBreadcrumbs() {
  return (
    <Box
      sx={{
        marginBottom: "5px",
      }}
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Basic
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Theme
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}
