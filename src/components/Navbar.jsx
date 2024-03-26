import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-10">
      <Link to="/">Youtube</Link>
      <input type="text" placeholder="영상 검색" />
    </nav>
  );
}
