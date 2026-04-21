import { IconMy, IconCart } from '../icon/Icon';

const User_Menu = [
  { id: 2, name: "회원가입", link: "#none", icon:IconMy },
  { id: 3, name: "장바구니", link: "#none", icon:IconCart },
];
const UserMenu = () => {
    return (
        <div className="userMenu">
            <ul className="flex items-center gap-[7px] lg:gap-[20px]">
                {User_Menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <li key={item.id} >
                            <a href={item.link} className="flex justify-center flex-col gap-[5px] text-black font-normal text-xs text-center leading-none">
                                <span className='flex justify-center'>
                                    {Icon && <Icon className="w-6 h-6 text-black" />}
                                </span>
                                <div className="hidden lg:block">
                                    {item.name}
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default UserMenu;