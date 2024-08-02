import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one uppercase letter, and one lowercase letter."
    ),
});

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  maxWidth: "400px",
  margin: "auto",
  textAlign: "center",
}));

const CustomTextField = ({ field, form, ...props }) => (
  <TextField
    {...field}
    {...props}
    error={form.touched[field.name] && Boolean(form.errors[field.name])}
    helperText={form.touched[field.name] && form.errors[field.name]}
    fullWidth
    margin="normal"
  />
);
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("Submitting values:", values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      {() => (
        <FormContainer>
          <Typography variant="h6">Register</Typography>
          <Form autoComplete="off">
            <Field
              name="name"
              type="text"
              label="Username"
              component={CustomTextField}
            />
            <Field
              name="email"
              type="email"
              label="Email"
              component={CustomTextField}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={CustomTextField}
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
}
