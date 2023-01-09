import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Personal Notes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#6692d4',
          borderRadius: '8px' 
        }}>New note</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;