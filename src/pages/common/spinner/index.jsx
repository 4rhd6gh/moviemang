import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import * as selector from "@data/rootSelectors";

const Spinner = () => {
  const open = useSelector(selector.common.loadingStatus);
  const css = "hidden ";
  const openCss =
    "flex fixed top-0 right-0 bottom-0 left-0 items-center justify-center z-50";

  return (
    <div className={open ? openCss : css}>
      {open ? <TailSpin color="#dcf836"></TailSpin> : null}
    </div>
  );
};
export default Spinner;
