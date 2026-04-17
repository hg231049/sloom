import { useState } from 'react';
import Product from '../product/Product'

const Best = () => {

    // 1. 초기 노출 상품 4개
    const [visibleCount,setVisibleCount] = useState(4);
    const totalProducts = 8; // 총 상품 개수

    // 2. 버튼 클릭 시 호출 될 함수
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };


    return (
        <div className="main-box box2 mb-[67px]">
            <div className="inner">
                <div className="main-title">
                    <h2 className="text-2xl font-bold">SLOOM BEST</h2>
                </div>
                <Product limit={visibleCount}/>
                {visibleCount < totalProducts && (
                    <div onClick={handleShowMore} className='more-btn flex justify-center items-center mt-[30px] p-[12px_10px] text-sm font-bold rounded-[10px] border border-[rgba(0,0,0,0.50)]'>상품 더 보기</div>
                )}
            </div>
        </div>
    )
}

export default Best;