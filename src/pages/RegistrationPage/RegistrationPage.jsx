import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
}));

export default function RegisterPage() {
  return (
    <PageContainer>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </PageContainer>
  );
}
