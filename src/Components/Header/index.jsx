import { AppBar, Toolbar, Typography } from "@mui/material";
import SimpleCart from "../SimpleCart";

const Header = () => {
  return (
    <AppBar position="static" style={{padding: "8px", marginBottom: "10px"}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <SimpleCart />
        </Toolbar>
      </AppBar>
  )
}

export default Header;