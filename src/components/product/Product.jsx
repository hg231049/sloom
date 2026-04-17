
import { prd1 } from '../../assets/main';

const Product = ({ limit }) => {
    const Prd_List = [
        { id: 1, name: "종아리편한케어 프리미엄 종아리 마사지기", link: "/logout", orgPrice:"260,000원", salePrice:"149,000원",percent:"43%",thumb:prd1 },
        { id: 2, name: "발편한케어 V2 프리미엄 발 마사지기", link: "/logout", orgPrice:"200,000원", salePrice:"109,000원",percent:"43%",thumb:prd1 },
        { id: 3, name: "발편한케어 V2 프리미엄 발 마사지기", link: "/logout", orgPrice:"260,000원", salePrice:"149,000원",percent:"43%",thumb:prd1 },
        { id: 4, name: "종아리편한케어 프리미엄 종아리 마사지기", link: "/logout", orgPrice:"200,000원", salePrice:"109,000원",percent:"43%",thumb:prd1 },
    ];

    return (
        <div className='grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4'>
            {[...Prd_List,...Prd_List].slice(0, limit).map((item,index) => (
                <div key={item.id} className="prd-item">
                    <a href={item.link}>
                        <div className="prd-thumb relative">
                            <span className='index absolute p-[7px_11px] text-white text-sm leading-none bg-brand-color rounded-[5px_0]'>{index + 1}</span>
                            <span className=' block rounded-[5px] overflow-hidden'><img src={item.thumb} alt={item.name} /></span>
                        </div>
                        <div className="prd-description">
                            <div className="prd-name m-[10px_0_5px] text-sm leading-[18px]">
                                {item.name}
                            </div>
                            <div className="prd-price-wrap">
                                <div className='text-xs text-[#ACACAC]'>{item.orgPrice}</div>
                                <div className='flex gap-[7px] text-base font-bold'>
                                    <span className='text-sale-color'>{item.percent}</span>
                                    {item.salePrice}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}


export default Product;