import { NavLink } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const HomePage = () => {
  return (
    <>
      <PageTitle>My Phonebook</PageTitle>
      <Container>
        <Button
          variant="contained"
          color="primary"
          component={StyledNavLink}
          to="/contacts"
        >
          Go to contacts
        </Button>
      </Container>
    </>
  );
};

export default HomePage;
