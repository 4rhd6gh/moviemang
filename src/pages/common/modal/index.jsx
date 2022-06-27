import React, { useEffect } from "react";
import Button from "@component/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Modal(props) {
  const { open, moiveInfo, onClose } = props;
  const navigate = useNavigate();
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };
  async function getPlayList() {
    const playlist = await axios.get(``);
  }
  useEffect(() => {}, []);
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
                      PlayList
                    </h1>
                    <div></div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
                  <Button
                    variant="contained"
                    text="확인"
                    type="button"
                    onClick={onCloseModal}
                    width="w-20"
                    backgroundColor="bg-themePink"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  moiveInfo: PropTypes.object,
  onClose: PropTypes.func,
};
