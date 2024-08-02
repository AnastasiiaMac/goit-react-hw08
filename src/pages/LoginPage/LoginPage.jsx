import LoginForm from "../../components/LoginForm/LoginForm";
import { Box, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" gutterBottom>
        Please log in
      </Typography>
      <LoginForm />
    </Box>
  );
}
