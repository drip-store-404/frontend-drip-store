
import'./ShopCart.css'


export const ShopCart = ({value}) => {
  return (
    <div className="box-Shop-cart">
      <a href=''>
        <img src="../../../public/shopCart.svg" alt=""/>
      </a>
      <span>{value}</span>
    </div>
  );
}