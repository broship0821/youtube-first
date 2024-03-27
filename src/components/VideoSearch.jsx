import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getVideoList } from "../api/Video";

export default function VideoSearch() {
  const [keyword, setKeyword] = useState("");
  const client = useQueryClient();
  const getSearchList = () => {
    client.invalidateQueries(["videoList"], {
      exact: false,
      quertFn: (key, ...args) => getVideoList(...args, keyword),
    });
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSearchList();
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="영상 검색"
        value={keyword}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={getSearchList}>🔍</button>
    </>
  );
}
