import { useState } from "react";

const userBenefit = [
    { id: 1, name: "쿠폰", link: "#none", count:"1개" },
    { id: 2, name: "적립금", link: "#none", count:"1,000,000원" },
    { id: 3, name: "작성 가능 리뷰", link: "#none", count:"0개"},
];
const cateMenu = [
    {   
        id: 1, name: "제품구매하기", link: "#none",
        subItems : [
            { id: 1, name: "전상품", link: "#none"},
            { id: 2, name: "단독세트", link: "#none"},
            { id: 3, name: "베스트", link: "#none"},
            { id: 3, name: "전상품", link: "#none"},
        ]
    },
    {   
        id: 2, name: "고객관리", link: "#none",
        subItems : [
            { id: 1, name: "공지사항", link: "#none"},
            { id: 2, name: "리뷰", link: "#none"},
            { id: 3, name: "faq", link: "#none"},
        ]
    },
];

const SlideMenu = ({onClickMenuBar}) => {
    
    const [openMenu,setOpenMenu] = useState(null);

    const onClickMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    }

    return (
        <div className="slideMenu fixed top-0 left-0 w-full h-full z-50 bg-white lg:hidden">
            <div className="menu-header text-white bg-brand-color">
                <div className="user-info p-[20px_20px_10px_20px] ">
                    <div className="flex items-center gap-[4px]">
                        <h3 className="text-[18px] font-bold">이은서</h3>
                        <div className="flex justify-center items-center p-[1px_6px] rounded-[5px] bg-[#ECDDCD]"><span className="text-sm text-brand-color font-medium">웰컴</span></div>
                    </div>
                    <p className="p-[4px_0_0] text-[14px]">하루의 피로, 슬룸으로 새로고침</p>
                    <button onClick={onClickMenuBar} className="absolute top-5 right-5">X</button>
                </div>
                <div className="user-benefit p-[10px_20px_27px]">
                    <div className="flex">
                        {userBenefit.map((item)=>
                        <div className="flex flex-col gap-[8px] flex-1 text-center">
                            <a href={item.link}>
                                <h4 className="text-sm">{item.name}</h4>
                                <p className="text-[18px] font-bold">{item.count}</p>
                            </a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="menu-wrap p-5">
                <div className="cate">
                    <ul>
                        {cateMenu.map((item)=>
                        <li value={openMenu} onClick={()=>onClickMenu(item.id)}>
                            <p className="p-[15px_0_10px] text-[18px] font-bold"><a href={item.link}>{item.name}</a></p>
                            {openMenu === item.id &&
                                <div className="subCate">
                                    <ul className="[&_li]:p-[9px_0_9px_10px] [&_li]:text-[16px]">
                                        {item.subItems.map((subItems,idx)=>
                                            <li><a href={subItems.link}>{subItems.name}</a></li>
                                        )}
                                    </ul>
                                </div>
                            }
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="menu-footer"></div>
        </div>
    )
}

export default SlideMenu;