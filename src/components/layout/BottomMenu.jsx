import { fixedIconMy,fixedIconCate,fixedIconCart,fixedIconHome,fixedIconSearch } from '../../assets/main';

const Bottom_Menu = [
    { id: 1, name: "카테고리", link: "/logout", icon:fixedIconCate },
    { id: 2, name: "마이페이지", link: "/join", icon:fixedIconMy },
    { id: 3, name: "홈", link: "/cart", icon:fixedIconHome },
    { id: 4, name: "장바구니", link: "/join", icon:fixedIconCart },
    { id: 5, name: "검색", link: "/cart", icon:fixedIconSearch },
];
const BottomMenu = () => {
    return (
        <div className="bottomMenu block fixed bottom-0 w-full bg-white border-t border-[#acacac] z-10 lg:hidden">
            <nav>
                <ul className='flex justify-between py-[10px] [&_li]:flex-1 [&_li]:flex [&_li]:justify-center [&_li]:text-center [&_.icon]:flex [&_.icon]:justify-center [&_.icon]:min-h-[24px]'>
                    {Bottom_Menu.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className=''>
                                <span className="icon"><img src={item.icon} alt={item.name} /></span>
                                <p className='mt-[6px] text-[10px]'>{item.name}</p>
                            </a>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </div>
    )
}

export default BottomMenu;