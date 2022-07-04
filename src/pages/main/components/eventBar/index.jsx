import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { MdLocalMovies } from "react-icons/md";
import Button from "@component/Button";

export default function EventBar(props) {
  const { eventType, eventName, onClick } = props;

  return (
    <div className="bg-eventBarBackgroundColor ">
      <div className="container flex items-center justify-center p-10 overflow-hidden">
        <div className="mr-8 ">
          <StaticIcon
            icon={MdLocalMovies}
            size={"xxlarge"}
            color={"text-gray-600"}
          />
        </div>
        <div>
          <h4 className="text-textHighlightColor">#{eventType}</h4>
          <p className="text-2xl text-textMainColor tablet:text-lg ">
            {eventName}
          </p>
        </div>
        <div className="mt-6 ml-3">
          <Button
            text="투표"
            size="medium"
            type="button"
            color="text-white"
            backgroundColor="bg-themePink"
            borderRadius="rounded-2xl"
          ></Button>
        </div>
      </div>
    </div>
  );
}

EventBar.propTypes = {
  eventType: PropTypes.string,
  eventName: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};
