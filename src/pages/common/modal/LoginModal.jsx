import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@component/Buttons/Button";

export default function LoginModal(props) {
  const { open = false, onClose } = props;
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Login</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => onClose(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    onClose(false);
                    console.log(values);
                  }}
                >
                  <Form>
                    <div className="relative flex-auto p-6">
                      <div className="mb-3 ">
                        email
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="block w-full p-2 mt-1 text-lg bg-transparent border rounded-lg focus:outline-none"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="py-1 text-xs text-red-500"
                        />
                      </div>
                      <div className="mb-3">
                        password
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          className="block w-full p-2 mt-1 text-lg bg-transparent border rounded-lg focus:outline-none"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="py-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                      <Button
                        variant="contained"
                        text="Login"
                        type="submit"
                        size="large"
                      />
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
