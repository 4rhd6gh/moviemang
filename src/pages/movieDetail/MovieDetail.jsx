import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Constants from "@constant";
import * as action from "@data/rootActions";
import * as selector from "@data/rootSelectors";
import Tabs from "@component/Tabs";
import Overview from "./components/tabContents/Overview";
import Reviews from "./components/tabContents/Reviews";
import StaticIcon from "@component/Icons/StaticIcon";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import NoImage from "@res/img/noimg.png";
import Modal from "@page/common/modal";
import Alert from "@page/common/alert";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const movieId = useParams().movieId;
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const movieDetailInfo = useSelector(selector.movie.getMovieDetail);
  let buyProviders = [];
  let rentProviders = [];
  let flatrateProviders = [];

  const addMovieCallback = useCallback((message) => {
    setOpen(false);
    setAlertMessage(message);
    setAlertOpen(true);
  }, []);

  const forProvider = movieDetailInfo?.KR;
  if (forProvider) {
    if (forProvider.buy) {
      forProvider.buy.map((item) => buyProviders.push(item.logo_path));
    }
    if (forProvider.rent) {
      forProvider.rent.map((item) => rentProviders.push(item.logo_path));
    }
    if (forProvider.flatrate) {
      forProvider.flatrate.map((item) =>
        flatrateProviders.push(item.logo_path)
      );
    }
  }

  async function getMovieDetail() {
    // 기존 검색 기록 삭제를 위한 reset 액션 실행
    dispatch(action.movie.resetMovieDetail());
    dispatch(action.movie.getPopularMovieDetail(movieId));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="flex pt-20 pl-20 text-2xl w-[1250px] mr-auto ml-auto">
        <div>
          <img
            loading="lazy"
            src={
              movieDetailInfo?.poster_path === null
                ? NoImage
                : Constants.TM_MOVIE_IMAGE_URL + movieDetailInfo?.poster_path
            }
            alt={movieDetailInfo?.title}
            className=" object-cover h-[505px] w-[330px]"
          />
          <div className="flex mt-4">
            <div className="flex">
              {buyProviders.map((item, index) => {
                return (
                  <div className="mr-3" key={index}>
                    <img
                      src={Constants.TM_MOVIE_IMAGE_URL + item}
                      alt={""}
                      loading="lazy"
                      className="object-cover h-[50px] w-[50px]"
                    />
                    <div className="text-xs text-center text-white">구매</div>
                  </div>
                );
              })}
              {rentProviders.map((item, index) => {
                return (
                  <div className="mr-3" key={index}>
                    <img
                      src={Constants.TM_MOVIE_IMAGE_URL + item}
                      alt={""}
                      loading="lazy"
                      className="object-cover h-[50px] w-[50px]"
                    />
                    <div className="text-xs text-center text-white">대여</div>
                  </div>
                );
              })}
              {flatrateProviders.map((item, index) => {
                return (
                  <div className="mr-3" key={index}>
                    <img
                      src={Constants.TM_MOVIE_IMAGE_URL + item}
                      alt={""}
                      loading="lazy"
                      className="object-cover h-[50px] w-[50px]"
                    />
                    <div className="text-xs text-center text-white">구독</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="ml-20 ">
          <div className="flex">
            <h1 className="text-4xl font-bold text-white ">
              {movieDetailInfo?.title}
            </h1>
            <span className="ml-4 text-gray-500">
              {movieDetailInfo?.release_date
                ? movieDetailInfo?.release_date.split("-")[0]
                : ""}
            </span>
          </div>
          <div className="text-lg italic text-gray-500">
            {movieDetailInfo?.tagline}
          </div>
          <div className="flex mt-5">
            <div>
              <StaticIcon
                icon={IoMdAddCircle}
                size="medium"
                color="text-[#dd003f]"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
          <div className="mt-16 mb-14">
            <Tabs menuList={[{ href: "#overview", name: "overview" }]} />
          </div>
          <div>
            <Overview
              overview={movieDetailInfo?.overview}
              genres={movieDetailInfo?.genres}
              crew={movieDetailInfo?.crew}
              cast={movieDetailInfo?.cast}
              recommand={movieDetailInfo?.recommend}
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={setOpen}
        movieInfo={{
          mvTitle: movieDetailInfo?.title,
          mvPosterPath: movieDetailInfo?.poster_path,
          tm_id: movieId,
        }}
        crew={movieDetailInfo?.crew}
        callback={addMovieCallback}
      />
      <Alert open={alertOpen} onClose={setAlertOpen} message={alertMessage} />
    </>
  );
}
