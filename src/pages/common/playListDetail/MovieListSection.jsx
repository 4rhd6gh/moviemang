import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Constants from "@constant";
import { BsTrash } from "react-icons/bs";
import StaticIcon from "@component/Icons/StaticIcon";
import * as actions from "@data/rootActions";
import * as apis from "@service/apis/movieMang";
import { useDispatch } from "react-redux";
import Alert from "@page/common/alert";

export default function MovieListSection(props) {
  const { movieArray = [], kind, refreshFunc, playlistId } = props;
  const [open, setOpen] = useState(false);
  const [targetMovieId, setTargetMovieId] = useState("");
  const [targetMovieName, setTargetMovieName] = useState("");
  const dispatch = useDispatch();
  async function deleteMovie(movieId) {
    try {
      dispatch(actions.common.startLoading);
      const response = await apis.requestAxios(
        "delete",
        `/myplaylist/movie/`,
        {},
        {
          playlistId: playlistId,
          tm_id: movieId,
        }
      );
      if (response.status === 204) {
        dispatch(actions.common.endLoading);
        setOpen(false);
        refreshFunc();
      }
    } catch (err) {
      dispatch(actions.common.endLoading);
      console.log(err);
    }
  }

  const deleteAlert = (tm_id, mvTitle) => {
    setTargetMovieId(tm_id);
    setTargetMovieName(mvTitle);
    setOpen(true);
  };

  return (
    <div className="mt-16">
      {movieArray.map((movie, index) => {
        return (
          <div key={index} className="flex items-center mb-6">
            <img
              src={Constants.TM_MOVIE_IMAGE_URL + movie.mvPosterPath}
              alt="movies"
              className="object-cover w-[103px] h-[153px]"
            />
            <div className=" bg-[#091a2c] px-3 py-3 w-[82%] h-[153px]">
              <h2 className="text-xl">{movie.mvTitle}</h2>
              <div className=" text-[#abb7c4]">{movie.mvDirector}</div>
            </div>
            {kind === "my" ? (
              <div>
                <StaticIcon
                  icon={BsTrash}
                  size="small"
                  color="text-[#dd003f]"
                  onClick={() => deleteAlert(movie.tm_id, movie.mvTitle)}
                />
              </div>
            ) : null}
          </div>
        );
      })}
      <Alert
        open={open}
        message={`"${targetMovieName}" 영화를 삭제하시겠습니까?`}
        onConfirm={deleteMovie}
        targetMovieId={targetMovieId}
        onClose={setOpen}
      />
    </div>
  );
}

MovieListSection.propTypes = {
  movieArray: PropTypes.array,
  kind: PropTypes.string,
};
