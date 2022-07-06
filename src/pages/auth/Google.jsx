import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as action from "@data/rootActions";

import { googleLoginImage } from "@assets/index";

export default function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(code);
      await dispatch(
        action.user.snsLogin(
          {
            code,
            loginType: "google",
          },
          navigate
        )
      );
    },
    flow: "auth-code",
  });
  return (
    <button onClick={googleLogin} className="py-2 cursor-pointer">
      <img src={googleLoginImage} width="245px" alt="googleLogin" />
    </button>
  );
}
