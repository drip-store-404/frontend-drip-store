import { Link } from 'react-router-dom';
//npm i react-router-dom


//Link é a tag a (ancora) do react e o href agr é to, deixando minha tela estavel e so trocando as rotas
// para abrir outra pagina quando clicar (target=_blank)
export const Useful = ({ margin, color, textDecoration, to, value, target }) => {
  return (
    <p style={{ margin: margin }}>
      <Link
        style={{
          color: color,
          textDecoration: textDecoration
        }}
        to={to}
        target={target}
      >{value}</Link>
    </p>
  );
}