import { prd1,prd2 } from '../../assets/main';
import ProductCard from './ProductCard';
import ProductHorizontal from './ProductHorizontal';

const Product = ({ limit, type,onAddCart }) => {
    const Prd_List = [
        { id: 1, name: "종아리편한케어 프리미엄 종아리 마사지기", summary: "프리미엄 EMS저주파", link: "#none", orgPrice: "260,000원", salePrice: "149,000원", percent: "43%", thumb: prd1 },
        { id: 2, name: "발편한케어 V2 프리미엄 발 마사지기", summary: "프리미엄 EMS저주파", link: "#none", orgPrice: "200,000원", salePrice: "109,000원", percent: "43%", thumb: prd2 },
        { id: 3, name: "발편한케어 V2 프리미엄 발 마사지기", summary: "", link: "#none", orgPrice: "260,000원", salePrice: "149,000원", percent: "43%", thumb: prd2 },
        { id: 4, name: "종아리편한케어 프리미엄 종아리 마사지기", summary: "", link: "#none", orgPrice: "200,000원", salePrice: "109,000원", percent: "43%", thumb: prd1 },
    ];

    // ✅ 타입에 따라 그리드/플렉스 레이아웃 결정
    const containerClass = type === 'new'
        ? "flex flex-col gap-0 " // New는 세로로 쌓기
        : "grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4"; // 기본은 격자형

    return (
        <div className={`prd-list ${containerClass}`}>
            {[...Prd_List,...Prd_List].slice(0, limit).map((item, index) => (
                <div className='prd-item [.new_&]:mb-[10px] [.new_&]:pb-[10px] [.new_&]:border-b [.new_&]:border-[rgba(192,192,192,0.2)] [.new_&]:last:border-0' key={`${item.id}-${index}`}>
                    <a href={item.link}>
                        {type === 'new' ? (
                            <ProductHorizontal item={item} index={index} onAddCart={onAddCart}/>
                        ) : (
                            <ProductCard item={item} index={index} showIndex={type === 'best'} onAddCart={onAddCart}/>
                        )}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Product;