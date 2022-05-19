import React from "react";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import { useSelector, useDispatch } from "react-redux";
import Button from "@component/Button";
export default function ErrorComponent() {
  const dispatch = useDispatch();
  const hasError = useSelector(selector.common.getHasError);
  const errorMessage = useSelector(selector.common.getErrorMessage);
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(action.common.confirmError);
    }
  };
  return (
    <>
      {hasError ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={onCloseModal}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={onCloseModal}
                  ></button>
                  <div>{errorMessage}</div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                  <Button
                    variant="contained"
                    text="확인"
                    onClick={onCloseModal}
                    width="w-full"
                    backgroundColor="bg-themePink"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
