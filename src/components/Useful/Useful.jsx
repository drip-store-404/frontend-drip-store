
import { Link } from 'react-router-dom';

export const Useful = ({margin, color, to,value, target, isActive, onClick, fontWeight, textUnderlineOffset, borderBottom, paddingBottom, borderEndStartRadius, borderEndEndRadius}) => {
  return (
    <p style={{ margin: margin}} onClick={onClick}>
    <Link
    style={{
      paddingBottom:isActive? '0.3rem': paddingBottom,
      borderBottom:isActive? '0.12rem #C92071 solid': borderBottom,
      fontWeight:isActive? '700' : fontWeight,
      borderEndEndRadius: isActive ? ' 0.0625rem': borderEndEndRadius,
      borderEndStartRadius: isActive ? ' 0.0625rem': borderEndStartRadius,
      color:isActive? '#C92071': color,
      fontWeight:isActive? '700' : fontWeight,
      textUnderlineOffset: isActive? '0.0625rem': textUnderlineOffset
    }}
    to={to}
    target={target}
    >{value}</Link>
    </p>
  );
}