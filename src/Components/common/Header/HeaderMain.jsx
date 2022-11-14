import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

function HeaderMain() {
    return (
        <header className='main-header'>
            <HeaderTop/>
            <HeaderNav/>
        </header>
    );
}

export default HeaderMain;