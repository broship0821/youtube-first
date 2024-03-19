import { useQuery } from "react-query";
import { getVideoList } from "../api/Video";

export default function VideoList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["videoList"],
    queryFn: getVideoList,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item.id.videoId}>{item.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
}
