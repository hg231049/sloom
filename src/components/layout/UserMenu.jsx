import { iconLogout, iconMy, iconCart } from '../../assets/main';

const User_Menu = [
  { id: 1, name: "로그아웃", link: "/logout", icon:iconLogout },
  { id: 2, name: "회원가입", link: "/join", icon:iconMy },
  { id: 3, name: "장바구니", link: "/cart", icon:iconCart },
];
const UserMenu = () => {
    return (
        <div className="userMenu">
            <ul className="flex items-center gap-[7px] lg:gap-[20px]">
                {User_Menu.map((item) => (
                    <li key={item.id} >
                        <a href={item.link} className="flex justify-center flex-col gap-[5px] text-brand-color font-normal text-xs text-center leading-none">
                            <span className='flex justify-center'><img src={item.icon} alt={item.name} /></span>
                            <div className="hidden lg:block">
                                {item.name}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserMenu;