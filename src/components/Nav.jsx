import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <nav className="prof-nav">
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://img.icons8.com/stickers/100/null/hamburger.png"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-pages">
        <Link className="pages">Orders</Link>
        <Link className="pages">Categories</Link>
        <Link className="pages">Addresses</Link>
        <Link className="pages">Profile</Link>
        <Link className="pages">{props.users}</Link>
      </div>
      <button>Logout</button>
    </nav>
  );
}
