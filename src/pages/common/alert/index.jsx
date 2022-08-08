import React from "react";
import Button from "@component/Button";
import PropTypes from "prop-types";

export default function Alert(props) {
  const { open, onClose, message, onConfirm = null, targetId = "" } = props;
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
            className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none z-90 focus:outline-none"
            onClick={onCloseModal}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900 ">
                      Message
                    </h1>
                    <div className="mt-4 text-gray-500">{message}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                  {onConfirm ? (
                    <>
                      <Button
                        variant="outlined"
                        text="취소"
                        type="button"
                        onClick={onCloseModal}
                        width="w-20"
                        backgroundColor="bg-white"
                      />
                      <div className="mr-3"></div>
                      <Button
                        variant="contained"
                        text="확인"
                        type="button"
                        onClick={() => {
                          onConfirm(targetId);
                          onClose(false);
                        }}
                        width="w-20"
                        backgroundColor="bg-themePink"
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        text="확인"
                        type="button"
                        onClick={onCloseModal}
                        width="w-20"
                        backgroundColor="bg-themePink"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Alert.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  targetId: PropTypes.string,
};
