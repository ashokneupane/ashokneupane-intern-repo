# Handling Forms with Formik #20
## What is Formik?
Formik is a popular open-source library for building and managing forms in React applications. It provides a structured and efficient way to handle form state, validation, and submission.

## Why it's useful for handling forms in React?
1. Simplifies the process of managing form state.
2. Handling the form submission.
3. Validating form data.
4. simplying displaying Error message.

## How does Formik simplify form management compared to handling state manually?
1. You don't need to write out every step for each form field individually
2. Form state (`values`, `errors`, `touched`, etc.) is managed internally.
3. A single `onChange` handler works across all fields.
4. It integrates easily with Yup for schema-based validation.

## What are the benefits of using Formik’s validation instead of writing validation logic manually?
1. When using Formik with Yup, you define rules once and let Formik apply them.
2. Validation schemas can be reused across components or forms.
3. Keeps the component clean by separating validation logic.

**Code snippet for validation of form using yup.**
```
const schemaValidate = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
```