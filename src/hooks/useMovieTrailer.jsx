import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideo = async () => {
      const data = await fetch("./nowPlayingMovies.json", API_OPTIONS);
      const json = await data.json();

      if (!json.results?.length) return;

      const trailer = json.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );

      dispatch(addTrailerVideo(trailer || json.results[0]));
    };

    if (movieId) getMovieVideo();
  }, [movieId, dispatch]);
};
