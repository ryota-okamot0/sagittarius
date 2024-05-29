import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const IndexPage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
      <Toolbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2">サンプルアプリ</Typography>
        <Typography>ここはトップページです</Typography>
      </Container>
    </Box>
  );
};

export default IndexPage;
