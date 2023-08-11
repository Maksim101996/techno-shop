import { FC } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks"
import { categoriesSlice } from '../../Redux/CategoriesReducer';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../Redux/AsyncActionCreators';
import { NavLink } from 'react-router-dom';


const Navbar: FC = () => {
	const { list } = useAppSelector((state) => state.categoriesReducer)
	const { isLoading } = useAppSelector((state) => state.categoriesReducer)
	const { error } = useAppSelector((state) => state.categoriesReducer)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	const [isActive, isSetActive] = useState(false)



	return <nav className='navbar'>
		<div className='navbar__container'>
			<ul className='navbar__items'>
				{/* {list.map((item) => {
					return <li style={{ color: "red" }} className="navbar__item" onClick={() => isSetActive(!isActive)} ><NavLink to={`/categories/${item.id}`}>{item.name}</NavLink> </li>
				})} */}
				<li className="navbar__item" ><NavLink onClick={() => isSetActive(!isActive)} className={isActive ? "active" : ""} to={`/categories/${1}`}>Компьютеры</NavLink> </li>
				<li className="navbar__item"><NavLink onClick={() => isSetActive(!isActive)} to={`/categories/${2}`}>Ноутбуки</NavLink></li>
				<li className="navbar__item"><NavLink onClick={() => isSetActive(!isActive)} to={`/categories/${3}`}>Смартфоны</NavLink></li>
				<li className="navbar__item"><NavLink onClick={() => isSetActive(!isActive)} to={`/categories/${4}`}>Телевизоры</NavLink></li>
			</ul>
			{/* {isLoading && "Идёт загрузка"}
			{error && error} */}
		</div>
	</nav>
}

export default Navbar