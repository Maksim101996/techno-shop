import { FC } from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/Routes';
import logo from "../../Assets/Images/footer/logo3.png"
import "./Footer.scss";
const Footer: FC = () => {
	return (<section className="footer">
		<div className="footer__container">
			<div className="footer__logo">
				<Link to={ROUTES.HOME}>
					<img className='header__logo-image' src={logo} alt="logo-icon" />
				</Link>
			</div>
			<div className="footer__year">
				2023
			</div>
			<div className="footer__social">
				<a href="https://www.youtube.com/">
					<svg className="icon-social" >
						<use href='sprite.svg#youtube'></use>
					</svg>
				</a>
				<a href="https://www.facebook.com/">
					<svg className="icon-social" >
						<use href='sprite.svg#facebook'></use>
					</svg>
				</a>
				<a href="https://www.instagram.com/">
					<svg className="icon-social" >
						<use href='sprite.svg#instagram'></use>
					</svg>
				</a>
			</div>
		</div>
	</section>
	)
}

export default Footer