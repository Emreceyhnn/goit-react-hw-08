import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Box, Button, Stack } from "@mui/material";
import { loginThunk } from "../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <Box
      sx={{
        p: "150px 310px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack spacing={2}>
            <Field
              component={TextField}
              name="email"
              label="Email"
              type="email"
              required
            />
            <Field
              component={TextField}
              name="password"
              label="Password"
              type="password"
              required
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
}
