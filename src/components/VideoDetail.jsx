export default function VideoDetail({ videoId }) {
  return (
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1`}
      frameborder="0"
    ></iframe>
  );
}
