// ProductPrice.jsx (또는 Product.jsx 상단)
const ProductPrice = ({ orgPrice, salePrice, percent, className = "" }) => (
  <div className={`prd-price-wrap ${className}`}>
    <div className='text-xs text-[#ACACAC] line-through lg:text-[18px]'>{orgPrice}</div>
    <div className='flex gap-[7px] items-center text-base font-bold lg:text-[24px] [.new_&]:lg:flex-col [.new_&]:lg:items-baseline [.new_&]:lg:gap-0'>
      <span className='text-sale-color lg:text-[26px]'>{percent}</span>
      {salePrice}
    </div>
  </div>
);

export default ProductPrice;