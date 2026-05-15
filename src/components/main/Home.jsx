import Visual from './Visual';
import QuickMenu from './QuickMenu';
import Best from './Best';
import LineBn from './LineBn';
import New from './New';

const Home = ({onAddCart,prdData}) => {
    
    return (
        <div className="main-wrap">
            <Visual/>
            <QuickMenu/>
            <Best prdData={prdData} type="best" onAddCart={onAddCart}/>
            <LineBn/>
            <New  prdData={prdData} type="new" onAddCart={onAddCart}/>
        </div>
    )
}

export default Home;