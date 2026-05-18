import Product from "../../product/Product";

const List = ({onAddCart,prdData}) => {

    // 상품 갯수
    const prdTotal = prdData.length;


    return (
        <div className="pb-[120px]">
            <div className="inner">
                <div className="titleArea p-[20px_0_40px] lg:p-[40px_0_80px] text-center ">
                    <h1 className="text-[24px] lg:text-[36px] font-bold">전제품</h1>
                </div>
                <div className="flex pb-2">
                    <p>{prdTotal}개의 상품</p>
                </div>
                <Product items={prdData} type="list" className="gap-y-20" onAddCart={onAddCart}/>
            </div>
        </div>
    )
}

export default List;