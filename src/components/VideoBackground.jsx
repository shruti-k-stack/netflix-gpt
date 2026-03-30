
import { useSelector } from 'react-redux';
import { useMovieTrailer } from '../hooks/useMovieTrailer';

export const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  console.log(trailerVideo);

    useMovieTrailer(movieId);

    if (!trailerVideo?.key) return null;

return (
  <div className='w-screen'>
  <iframe
    className="h-screen w-full aspect-video"
    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playsinline=1`}
    title="YouTube video player"
    allow="autoplay; encrypted-media; fullscreen"
  /> 
  </div>
);
};  
