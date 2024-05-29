import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import AppBar from "./AppBar";
import MenuDrawer from "./MenuDrawer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* サイドバーのトグル機能を一時的に無効にする場合は AppBar もコメントアウト */}
      { <AppBar open={open} toggleDrawer={toggleDrawer} /> }
      {/* サイドバーの表示を非表示にする */}
      { /*<MenuDrawer open={open} toggleDrawer={toggleDrawer} /> */}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          marginLeft: open ? '240px' : '0', // ドロワーの幅に応じてメインコンテンツの位置を調整
          transition: 'margin 0.3s ease',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Outlet />{/* ここが置き換わる */}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
