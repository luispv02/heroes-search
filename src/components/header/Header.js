import Menu from './Menu'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {

   
    const showMenu = (e) => {
        const contenedor = e.target.parentElement.parentElement;
        const menu = contenedor.querySelector('.menu')
        const icon = e.target;

        menu.classList.toggle('show-menu')
        icon.classList.toggle('bi-x')
    }

    return (
        <div className="container-header bg-black px-3 py-2">
            <div className="row bg-black text-white align-items-center">
                <div className="col title">
                    <Link 
                        to='/' 
                        className="text-white text-decoration-none h5"
                    >HeroesApp</Link>
                </div>

                <div className="col menu">
                    <Menu />
                </div>

                <div className="col icon d-flex justify-content-end">
                    <i 
                        className="bi bi-list"
                        onClick={(e) => showMenu(e)}
                    ></i>
                </div>
            </div>
        </div>

    )
}

export default Header
