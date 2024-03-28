import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList";

export default function Home() {
  const { keyword } = useParams();
  return <VideoList keyword={keyword} />;
}
