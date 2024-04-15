import { AppBar, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static" style={{padding: "8px"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;