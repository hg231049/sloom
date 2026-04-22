import Visual from './Visual';
import QuickMenu from './QuickMenu';
import Best from './Best';
import LineBn from './LineBn';
import New from './New';

const Home = ({onAddCart}) => {
    
    return (
        <div className="main-wrap">
            <Visual/>
            <QuickMenu/>
            <Best type="best" onAddCart={onAddCart}/>
            <LineBn/>
            <New type="new" onAddCart={onAddCart}/>
        </div>
    )
}

export default Home;