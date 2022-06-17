import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@component/Button";
import * as actions from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import { kakaoLoginImage, naverLoginImage } from "@assets/index";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/index";

export default function Login() {
  const dispatch = useDispatch();

  const errorMessage = useSelector(selector.user.getErrorMessage);
  const getError = useSelector(selector.user.getError);

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .email("이메일 형태가 아닙니다.")
      .required("이메일을 입력하지 않았습니다."),
    password: Yup.string().required("패스워드를 입력하지 않았습니다."),
  });

  useEffect(() => {
    //남아 있는 에러메시지 날리기
    dispatch(actions.user.confirmError());
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-6 mt-28 w-96">
      <div className="flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none ">
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
            console.log(values);
            dispatch(actions.user.login(values));
          }}
        >
          <Form>
            <div className="pt-6 pb-1 pl-10 pr-10 ">
              email
              <Field
                name="username"
                type="email"
                placeholder="Email"
                className="w-full h-10 pl-4 border-2 border-gray-300 border-solid rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="h-10 ml-10">
              <ErrorMessage
                name="username"
                component="div"
                className="py-1 text-xs text-red-500"
              />
            </div>
            <div className="pb-1 pl-10 pr-10 ">
              password
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full h-10 pl-4 border-2 border-gray-300 border-solid rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="h-10 ml-10 ">
              <ErrorMessage
                name="password"
                component="div"
                className="py-1 text-xs text-red-500"
              />
            </div>
            <div className="py-1 ml-10 mr-10 text-xs text-red-500">
              {getError ? errorMessage : null}
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
              <Button
                variant="contained"
                text="로그인"
                type="submit"
                width="w-full"
                backgroundColor="bg-themePink"
              />
              <div className="flex justify-between w-full">
                <a href={KAKAO_AUTH_URL}>
                  <img src={kakaoLoginImage} width="160px" alt="kakaoLogin" />
                </a>
                <a href={NAVER_AUTH_URL}>
                  <img src={naverLoginImage} width="160px" alt="naverLogin" />
                </a>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
