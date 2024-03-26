import { useQuery } from "@tanstack/react-query";
import { getVideoList } from "../api/Video";
import { Link, useNavigate } from "react-router-dom";

export default function VideoList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["videoList"],
    queryFn: getVideoList,
    staleTime: 1000 * 60 * 60,
  });
  const navigate = useNavigate();

  const onClickVideo = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li
            key={item.id.videoId}
            className="cursor-pointer border"
            onClick={() => {
              onClickVideo(item.id.videoId);
            }}
          >
            <div>
              <img src={item.snippet.thumbnails.default.url} />
            </div>
            <div>title: {item.snippet.title}</div>
            <div>channel: {item.snippet.channelTitle}</div>
            <div>publishTime: {item.snippet.publishTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
