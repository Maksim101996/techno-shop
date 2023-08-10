import { FC } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar: FC = () => {
	return <nav className='navbar'>
		<div className='navbar__container'>
			<ul className='navbar__items'>
				<li className="navbar__item"><Link to={`/categories/${1}`}>Компьютеры</Link> </li>
				<li className="navbar__item"><Link to={`/categories/${2}`}>Ноутбуки</Link></li>
				<li className="navbar__item"><Link to={`/categories/${3}`}>Смартфоны</Link></li>
				<li className="navbar__item"><Link to={`/categories/${4}`}>Телевизоры</Link></li>
			</ul>
			{/* <ul className='navbar__items'>
				<li className="navbar__item"><a>Компьютеры</a> </li>
				<li className="navbar__item"><a>Ноутбуки</a></li>
				<li className="navbar__item"><a>Смартфоны</a></li>
				<li className="navbar__item"><a>Телевизоры</a></li>
			</ul> */}
		</div>
	</nav>
}

export default Navbar