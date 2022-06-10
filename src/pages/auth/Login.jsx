import { useDispatch } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@component/Button";
import Input from "@component/Input";
import * as actions from "@data/rootActions";

export default function Login() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .email("이메일 형태가 아닙니다.")
      .required("이메일을 입력하지 않았습니다."),
    password: Yup.string().required("패스워드를 입력하지 않았습니다."),
  });

  return (
    <>
      <div className="relative max-w-3xl mx-auto my-6 mt-28 w-96">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
            <h3 className="text-3xl font-semibold text-center text-black ">
              LOGIN
            </h3>
          </div>

          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              dispatch(actions.user.login(values));
            }}
          >
            <Form>
              <div className="relative flex-auto p-6">
                <div className="mb-3">
                  email
                  <Field
                    name="username"
                    inputName="username"
                    type="email"
                    component={Input}
                  />
                  <ErrorMessage
                    name="username"
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
                  text="로그인"
                  type="submit"
                  width="w-full"
                  backgroundColor="bg-themePink"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
