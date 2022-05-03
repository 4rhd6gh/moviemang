import React from "react";
import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@component/Button";
import Input from "@component/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "@data/rootActions";

export default function LoginModal(props) {
  const { open = false, onClose } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("이메일 형태가 아닙니다.")
      .required("이메일을 입력하지 않았습니다."),

    password: Yup.string().required("패스워드를 입력하지 않았습니다."),
  });

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  return (
    <>
      {open ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={onCloseModal}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Login</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={onCloseModal}
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
                    dispatch(actions.user.login(values));
                  }}
                >
                  {({ handleChange, handleBlur }) => (
                    <Form>
                      <div className="relative flex-auto p-6">
                        <div className="mb-3 ">
                          email
                          <Field
                            name="email"
                            inputName="email"
                            type="email"
                            placeholder="Email"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
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
                            inputName="password"
                            type="password"
                            placeholder="Password"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
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
                          width={48}
                        />
                      </div>
                    </Form>
                  )}
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

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
