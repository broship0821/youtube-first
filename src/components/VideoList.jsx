import { useQuery } from "react-query";
import { getVideoList } from "../api/Video";

export default function VideoList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["videoList"],
    queryFn: getVideoList,
    staleTime: 1000 * 60 * 60,
  });

  const onClickVideo = () => {
    alert(111);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.items.map((item) => (
          <li
            key={item.id.videoId}
            className="cursor-pointer border"
            onClick={onClickVideo}
          >
            <div>
              <img src={item.snippet.thumbnails.default.url} />
            </div>
            <div>title: {item.snippet.title}</div>
            <div>channel: {item.snippet.channelTitle}</div>
            <div>publishTime: {item.snippet.publishTime}</div>
            <iframe
              id="player"
              type="text/html"
              width="640"
              height="390"
              src={`http://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&origin=http://example.com`}
              frameborder="0"
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}
