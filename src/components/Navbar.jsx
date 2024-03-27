import { Link } from "react-router-dom";
import VideoSearch from "./VideoSearch";
import { useState } from "react";

export default function Navbar() {
  // const [keyword, setKeyword] = useState('');
  // const handleKeywordChange = (searchWord) => {
  //   setKeyword(searchWord);
  // }
  return (
    <nav className="flex gap-10">
      <Link to="/">Youtube</Link>
      <VideoSearch />
    </nav>
  );
}
