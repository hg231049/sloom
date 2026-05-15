
import { IconMy, IconCart, IconOrder, IconLogout,IconSearch} from '../../icon/Icon'


const Quick_Menu = [
    { id: 1, name: "마이페이지", link: "#none", icon:IconMy },
    { id: 2, name: "장바구니", link: "#none", icon:IconCart, cartCnt:true },
    { id: 3, name: "주문조회", link: "#none", icon:IconOrder },
    { id: 4, name: "로그아웃", link: "#none", icon:IconLogout },
];

const MenuQuick = ({cartCount,search,onChangeSearch}) => {

    return(
        <div className="menu-quick flex flex-col gap-[15px] border-b-[10px] border-[#FBFBFB] p-[20px_20px_30px_20px]">
            <div className="quick-menu flex items-baseline gap-[10px] ">
                {Quick_Menu.map((quick)=>
                    <div key={quick.id} className="flex flex-col gap-[5px] flex-1 ">
                        <span className="relative mx-auto">
                            <quick.icon className="w-6 h-6"/>
                            <em className={`flex justify-center absolute bottom-[-7%] right-[0] w-[12px] h-[12px] leading-[12px] not-italic text-[10px] text-white bg-brand-color rounded-[100%] ${quick.cartCnt ? "block" : "hidden"}`}>{cartCount}</em>
                        </span>
                        <p className="text-[14px] text-center">{quick.name}</p>
                    </div>
                )}
            </div>
            <div className="quick-search relative">
                <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어를 입력해 주세요' className='w-full h-[50px] border-b boder-black text-md'/>
                <button className='absolute top-1/2 right-0 -translate-y-1/2'><IconSearch/></button>
            </div>
        </div>
    )
}

export default MenuQuick;