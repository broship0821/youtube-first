import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList";
import { useQuery } from "@tanstack/react-query";
import { getVideoList } from "../../api/Video";

export default function Home() {
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["videoList", keyword],
    queryFn: () => getVideoList(keyword),
    staleTime: 1000 * 60 * 60,
  });
  return <VideoList isLoading={isLoading} error={error} data={data} />;
}
