import TopBn from './TopBn';
import SUBGNB from './SUBGNB';
import GNB from './GNB';
import UserMenu from './UserMenu';
import Logo from './Logo';

const Header = () => {
    return (
        <header>
            <TopBn/>
            <div className="inner">
                <div className="flex justify-between items-center my-[15px] md:my-[20px]">
                    <Logo/>
                    <div className='header-left flex gap-[73px] items-center'>
                        <div className="hidden lg:block">
                            <SUBGNB/>
                        </div>
                        <UserMenu/>
                    </div>
                </div>
                <div className="fixed-gnb sticky">
                    <GNB/>
                </div>
            </div>
        </header>
    );
}

export default Header;