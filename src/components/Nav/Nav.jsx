
// qm chamar é qm vai dizer o tamanho 
export const Nav = ({ children, flexDirection, width, height, position, gap, margin, top, }) => {
  return (
    <nav style={{
      position: position,
      top: top,
      margin: margin
    }}>
      <ul style={{
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