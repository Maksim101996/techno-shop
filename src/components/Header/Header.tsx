import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";
import logo from '../../Assets/Images/Header/logo2.png'
import avatar from '../../Assets/Images/Header/userAvatar.png'
import { ROUTES } from '../../components/utils/Routes';
import miniLogo from "../../Assets/Images/footer/logo3.png"


const Header: FC = () => {
	const widthSize = window.innerWidth
	console.log(widthSize);





	return <div className='header'>
		<div className="header__container">
			<div className="header__logo">
				<Link to={ROUTES.HOME}>
					{widthSize > 768 ? <img className='header__logo-image' src={logo} alt="logo-icon" /> : <img className='header__logo-image' src={miniLogo} alt="logo-icon" />}
				</Link>
			</div>
			<div className="header__info info">
				<div className="info__user">
					<div className="info__avatar">
						<img className="info__avatar-image" src={avatar} alt="user-avatar" />
					</div>
					<div className="info__user-name">
						Maksim 101010
					</div>
				</div>
			</div>
			<form className='header__search-form'>
				<input type='text'
					name='search'
					className="header__search"
					autoComplete='off'
					autoFocus={true}
					// value=""
					placeholder='Search product...'
					onChange={() => { }}
				/>
				<div className="header__box"></div>
			</form>

			<div className="header__account">
				<Link to={ROUTES.CART} className="header__favorites">
					<svg className="icon-heart" >
						<use href='sprite.svg#heart'></use>
					</svg>
				</Link>
				<Link to={ROUTES.CART} className="header__basket">
					<svg className="icon-basket" >
						<use href='sprite.svg#basket'></use>
					</svg>
					<span className='header__basket-count'>2</span>
				</Link>
			</div>
		</div>
	</div>
}

export default Header