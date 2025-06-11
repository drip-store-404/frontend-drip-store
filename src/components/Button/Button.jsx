
import './Button.css'

export const Button = ({children, width, height, color, margin}) => {
  return(
   <button className='button'
   style={{
    width: width,
    height: height,
    color: color,
    backgroundColor: color && '#f5f5f5',
    margin: margin
  }}
   >{children}</button>
  );
}