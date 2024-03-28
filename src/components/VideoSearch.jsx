import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoSearch() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const getSearchList = () => {
    navigate(`/${keyword}`);
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
