//styles
import './Navbar.css'
//images
import riot from '../../assets/riot.png'
import logovalorant from '../../assets/logovalorant.svg'
import search from '../../assets/search.png'
export const Navbar = () => {
    return (
        <header className="header">
            <nav className='navbar'>
                <div className="navbarImage">
                    <img src={riot} alt="" />
                    <img src={logovalorant} alt="" />
                </div>
                <a className="navItem"><li >Información del juego</li></a>
                <div className="searchNavItem">
                    <img src={search} alt="" />

                    <input type="text" name='search' />
                </div>
            </nav>
        </header>
    )
}
