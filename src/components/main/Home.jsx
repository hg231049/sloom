import Visual from './Visual';
import QuickMenu from './QuickMenu';
import Best from './Best';
import LineBn from './LineBn';

const Home = () => {
    return (
        <div className="main-wrap">
            <Visual/>
            <QuickMenu/>
            <Best/>
            <LineBn/>
        </div>
    )
}

export default Home;