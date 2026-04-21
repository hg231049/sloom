import { IconCate, IconMy, IconCart, IconHome, IconSearch } from '../icon/Icon';

const Bottom_Menu = [
    { id: 1, name: "카테고리", link: "#none", icon:IconCate },
    { id: 2, name: "마이페이지", link: "#none", icon:IconMy },
    { id: 3, name: "홈", link: "/", icon:IconHome},
    { id: 4, name: "장바구니", link: "#none", icon:IconCart },
    { id: 5, name: "검색", link: "#none", icon:IconSearch },
];
const BottomMenu = () => {
    return (
        <div className="bottomMenu block fixed bottom-0 w-full bg-white border-t border-[#acacac] z-10 lg:hidden">
            <nav>
                <ul className='flex justify-between py-[10px] [&_li]:flex-1 [&_li]:flex [&_li]:justify-center [&_li]:text-center [&_.icon]:flex [&_.icon]:justify-center [&_.icon]:min-h-[24px]'>
                    {Bottom_Menu.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id}>
                                <a href={item.link} className=''>
                                    <span className="icon">
                                        {Icon && <Icon className="w-6 h-6 text-blac" />}
                                    </span>
                                    <p className='mt-[6px] text-[12px]'>{item.name}</p>
                                </a>
                            </li>
                        );
                   })}
                    
                </ul>
            </nav>
        </div>
    )
}

export default BottomMenu;