import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { BASE_IMG_CDN } from "../utils/constants";

export const VideoBackground = ({ movieId, backdrop }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) {
    return (
      <div className="w-screen">
        <iframe
          className="h-screen w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&playsinline=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; fullscreen"
        />
      </div>
    );
  }

  return (
    <img
      className="w-full h-screen object-cover"
      src={`${BASE_IMG_CDN}${backdrop}`}
      alt="movie background"
    />
  );
};
