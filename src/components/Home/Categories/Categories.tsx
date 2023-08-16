import { FC } from 'react'
import "./Categories.scss"
import pcImage from "../../../Assets/Images/home/Categories/bg__pc.jpg"
import noteImage from "../../../Assets/Images/home/Categories/bg__notebook.jpg"
import phoneImage from "../../../Assets/Images/home/Categories/bg__phone.jpg"
import tvImage from "../../../Assets/Images/home/Categories/bg__tv.jpg"
import { NavLink } from 'react-router-dom'

const Categories: FC = () => {
	return <div className="categories">
		<div className="categories__container">
			<div className="categories__items">
				<div className="categories__item">
					<div className="item-categories">
						<h2 className="item-categories__title">Компьютеры</h2>
						<NavLink to={`/categories/${1}`} className="item-categories__picture">
							<img src={pcImage} alt="category-image" className="item-categories__image" />
						</NavLink>
					</div>
				</div>
				<div className="categories__item">
					<div className="item-categories">
						<h2 className="item-categories__title">Ноутбуки</h2>
						<NavLink to={`/categories/${2}`} className="item-categories__picture">
							<img src={noteImage} alt="category-image" className="item-categories__image" />
						</NavLink>
					</div>
				</div>
				<div className="categories__item">
					<div className="item-categories">
						<h2 className="item-categories__title">Смартфоны</h2>
						<NavLink to={`/categories/${3}`} className="item-categories__picture">
							<img src={phoneImage} alt="category-image" className="item-categories__image" />
						</NavLink>
					</div>
				</div>
				<div className="categories__item">
					<div className="item-categories">
						<h2 className="item-categories__title">Телевизоры</h2>
						<NavLink to={`/categories/${4}`} className="item-categories__picture">
							<img src={tvImage} alt="category-image" className="item-categories__image" />
						</NavLink>
					</div>
				</div>
			</div>
		</div>

	</div>
}

export default Categories