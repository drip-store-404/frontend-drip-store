import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = ({ color, margin, width, height}) => {
  return (
    <Link style={{margin: margin,
      width:width,
      height:height
    }} className="logo" to="">
      <img src={!color ? "../../../public/logo.svg" 
        : "../../../public/logo-white.svg"} />
      <span style={{ color: color}}>Drip Store</span>
    </Link>
  );
}