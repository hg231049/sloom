const MENU_LIST = [
  { id: 1, name: "🌸봄맞이 기획전", link: "/new" },
  { id: 2, name: "NEW", link: "/howToUse" },
  { id: 3, name: "전체 상품", link: "/brand" },
  { id: 4, name: "단독 세트", link: "/service" },
  { id: 5, name: "등/허리", link: "/business" },
  { id: 6, name: "발/종아리", link: "/service" },
  { id: 7, name: "손/눈", link: "/business" },
];
const GNB = () => {
    return (
        <nav className="overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch">
            <ul className="flex gap-[25px] m-[5px_0_10px_0]  lg:gap-[24px] lg:m-[10px_0_20px_0] whitespace-nowrap">
                {MENU_LIST.map((item) => (
                    <li key={item.id} ><a href={item.link} className="py-[5px] text-[#2B3136] font-medium text-base leading-6 tracking-[-0.176px] lg:leading-4 lg:py-2  lg:tracking-[-0.32px] lg:font-bold">{item.name}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default GNB;