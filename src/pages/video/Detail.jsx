import { useParams } from "react-router-dom";
import VideoDetail from "../../components/VideoDetail";

export default function Detail() {
  const { videoId } = useParams();
  return (
    <div>
      <VideoDetail videoId={videoId} />
    </div>
  );
}
