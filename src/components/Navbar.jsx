import { Link } from "react-router-dom";
import VideoSearch from "./VideoSearch";

export default function Navbar() {
  return (
    <nav className="flex gap-10">
      <Link to="/">Youtube</Link>
      <VideoSearch />
    </nav>
  );
}
