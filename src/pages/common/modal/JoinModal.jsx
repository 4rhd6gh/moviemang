import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@component/Button";
import Input from "@component/Input";
import ToggleSwitch from "@page/common/ToggleSwitch";
import StaticIcon from "@component/Icons/StaticIcon";
import Tooltip from "@component/Tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function JoinModal(props) {
  const { open = false, onClose } = props;
  const [emailCheck, setEmailCheck] = useState(false);
  const [nickNameCheck, setnickNameCheck] = useState(false);
  const JoinSchema = Yup.object().shape({
    nickName: Yup.string().required("닉네임을 입력하지 않았습니다."),
    email: Yup.string()
      .email("이메일 형태가 아닙니다.")
      .required("이메일을 입력하지 않았습니다."),

    password: Yup.string()
      .required("패스워드를 입력하지 않았습니다.")
      .matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{9,20}$/,
        "비밀번호는 9~20자이며, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "패스워드가 일치하지 않습니다."
    ),
  });

  function onNickNameCheck() {
    setnickNameCheck(true);
  }

  function onEmailCheck() {
    setEmailCheck(true);
  }

  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Join</h3>
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
                    nickName: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={JoinSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                  }}
                >
                  {({ handleChange, handleBlur }) => (
                    <Form>
                      <div className="relative flex-auto p-6">
                        <div className="flex ">
                          <Field
                            name="nickName"
                            inputName="nickName"
                            type="text"
                            placeholder="닉네임"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
                            disabled={nickNameCheck}
                          />
                          <Button
                            variant="outlined"
                            type="button"
                            text="중복체크"
                            width={20}
                            onClick={onNickNameCheck}
                            disabled={nickNameCheck ? true : false}
                          />
                        </div>
                        <div className="mb-3">
                          <ErrorMessage
                            name="nickName"
                            component="div"
                            className="py-1 text-xs text-red-500"
                          />
                        </div>
                        <div className="flex">
                          <Field
                            name="email"
                            inputName="email"
                            type="email"
                            placeholder="Email"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
                            disabled={emailCheck}
                          />
                          <Button
                            variant="outlined"
                            type="button"
                            text="중복체크"
                            width={20}
                            onClick={onEmailCheck}
                            disabled={emailCheck ? true : false}
                          />
                        </div>
                        <div className="mb-3">
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="py-1 text-xs text-red-500"
                          />
                        </div>

                        <div className="flex">
                          <Field
                            name="number"
                            inputName="number"
                            type="text"
                            placeholder="인증번호"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
                          />
                          <Button
                            variant="contained"
                            type="button"
                            text="인증"
                            width={20}
                          />
                        </div>
                        <div className="mb-3 ">
                          <ErrorMessage
                            name="number"
                            component="div"
                            className="py-1 text-xs text-red-500"
                          />
                        </div>

                        <div className="mb-3">
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
                        <div className="mb-3">
                          <Field
                            name="passwordConfirm"
                            inputName="passwordConfirm"
                            type="password"
                            placeholder="Password comfirm"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            component={Input}
                          />
                          <ErrorMessage
                            name="passwordConfirm"
                            component="div"
                            className="py-1 text-xs text-red-500"
                          />
                        </div>
                        <div className="flex mt-3">
                          메일 구독 서비스
                          <Tooltip tooltipText="메일 구독 서비스 설명">
                            <StaticIcon
                              icon={AiOutlineQuestionCircle}
                              size="small"
                              color="text-gray-300"
                            />
                          </Tooltip>
                          <ToggleSwitch />
                        </div>
                      </div>

                      <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                        <Button
                          variant="contained"
                          text="Join"
                          type="submit"
                          width={60}
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
