import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import AppBar from "../components/AppBar";  // デフォルトエクスポートのため {} を削除
import MenuDrawer from "../components/MenuDrawer";  // デフォルトエクスポートのため {} を削除
import Typography from "@mui/material/Typography";  // デフォルトエクスポートのため {} を削除

const ItemsPage = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h2">商品一覧ページ</Typography>
          <Typography>ここは商品一覧ページです</Typography>
        </Container>
      </Box>
    </>
  );
};

export default ItemsPage;
