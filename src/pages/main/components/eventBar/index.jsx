import React from "react";
import PropTypes from "prop-types";
import StaticIcon from "@component/Icons/StaticIcon";
import { MdLocalMovies } from "react-icons/md";
import Button from "@component/Button";

export default function EventBar(props) {
  const { eventType, eventName, onClick } = props;
  return (
    <div className="bg-gray-300 ">
      <div className="container flex items-center justify-center p-10 overflow-hidden">
        <div className="mr-8 ">
          <StaticIcon
            icon={MdLocalMovies}
            size={"xxlarge"}
            color={"text-gray-600"}
          />
        </div>
        <div>
          <h4 className="text-indigo-900 ">#{eventType}</h4>
          <p className="text-2xl ">{eventName}</p>
        </div>
        <div>
          <Button
            onClick={onClick}
            text={eventType}
            type="button"
            variant="contained"
            size={"small"}
          />
        </div>
      </div>
    </div>
  );
}

EventBar.propTypes = {
  eventType: PropTypes.string,
  eventName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
