import { Button, Box, Stack } from "@mui/material";
import { Formik, Field } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk } from "../redux/contacts/operations";
import { selectorContacts } from "../redux/contacts/selectors";

/* ---------------- VALIDATION ---------------- */

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short, minimal length 2!")
    .max(50, "Too long, maximum length 50!")
    .required("Required")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces"
    ),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Phone number is not valid"
    )
    .min(7, "Too short, minimal length 7!")
    .required("Required"),
});

/* ---------------- COMPONENT ---------------- */

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const isExist = contacts.find(
          (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        if (isExist) {
          alert(`${values.name} is already in contacts`);
          return;
        }

        dispatch(addContactThunk(values));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Field
              component={TextField}
              name="name"
              label="İsim"
              variant="outlined"
              fullWidth
            />

            <Field
              component={TextField}
              name="number"
              label="Telefon"
              variant="outlined"
              fullWidth
            />

            <Button type="submit" variant="contained">
              Ekle
            </Button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
}
