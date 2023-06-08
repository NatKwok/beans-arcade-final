import YouTube from 'react-youtube';

function VideoPlayer(props) {
  let { videoId, start, end } = props;
  const opts = {
    height: '400',
    width: '640',
    playerVars: {
      autoplay: 1,
      start: start,
      end: end,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      cc_load_policy: 3,
      iv_load_policy: 3
    },
    modestbranding: 1,
  };

  function onStateChange(event) {
    if (event.data === 0) { // ended
      setTimeout(() => {
        // event.target.setVolume(0);
        event.target.seekTo(start);
        event.target.playVideo();
      }, 5000)
    }
  }
  return (
    <YouTube key={videoId} videoId={videoId} opts={opts} onStateChange={onStateChange} />
  );
}

export default VideoPlayer;
