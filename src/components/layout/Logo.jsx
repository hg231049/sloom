import { logo } from '../../assets/main';

const Logo = () => {
    return (
        <div className="main-logo max-w-[105px] w-full md:max-w-[162px] ">
            <img src={logo} alt="로고" className="w-full" />
        </div>
    )
}

export default Logo;