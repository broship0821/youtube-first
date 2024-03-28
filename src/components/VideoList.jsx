import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVideoList } from "../api/Video";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function VideoList({ keyword = "" }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["videoList"],
    queryFn: () => getVideoList(keyword),
    staleTime: 1000 * 60 * 60,
  });
  const client = useQueryClient();
  useEffect(() => {
    client.invalidateQueries(["videoList"]);
  }, [keyword]);
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
            <div>id: {item.id.videoId}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
