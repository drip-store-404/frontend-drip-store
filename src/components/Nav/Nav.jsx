
export const Nav = ({children, flexDirection, width, height, position, gap, top, margin}) => {
  return (
      <nav style={{
          position: position,
          top:top,
          margin: margin
      }}>
       <ul 
       style={{
        display: 'flex', 
        flexDirection: flexDirection,
        gap: gap,
        width: width,
        height: height
        }}>
        {children}
       </ul>
      </nav>
  );
}