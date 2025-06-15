
import { Link } from 'react-router-dom';

export const Useful = ({margin, color, textDecoration, to,value, target, display}) => {
  return (
    <p style={{ margin: margin}}>
    <Link
    style={{
      color:color,
      textDecoration: textDecoration
    }}
    to={to}
    target={target}
    display={display}
    >{value}</Link>
    </p>
  );
}