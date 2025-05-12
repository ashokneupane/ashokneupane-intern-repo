import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schemaValidate = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function form() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Form
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Formik
            initialValues={{ name: "", email: "" }}
            validationSchema={schemaValidate}
            onSubmit={(values) => console.log(values)}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <Field
                      className="border border-gray-400 p-2.5 rounded"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <div className="mt-2">
                    <Field
                      className="border border-gray-400 p-2.5 rounded"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}
