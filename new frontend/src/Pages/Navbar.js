import reply from "../Images/reply.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={reply} />
      </div>
      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">Documentation</a>
      </div>
      <div className="nav-btn">
        <button>Upload Docs</button>
      </div>
    </div>
  );
}
export default Navbar;
