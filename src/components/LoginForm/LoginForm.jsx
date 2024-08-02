import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const StyledForm = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: "400px",
  margin: "0 auto",
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const CustomTextField = ({ field, form, ...props }) => (
  <TextField
    {...field}
    {...props}
    error={form.touched[field.name] && Boolean(form.errors[field.name])}
    helperText={form.touched[field.name] && form.errors[field.name]}
  />
);

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("Submitting values:", values);
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Typography variant="h6">Log In</Typography>
        <Field
          name="email"
          type="email"
          label="Email"
          component={CustomTextField}
          fullWidth
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={CustomTextField}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
      </StyledForm>
    </Formik>
  );
}
