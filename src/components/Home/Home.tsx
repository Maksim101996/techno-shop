import { FC } from 'react'
import "./Home.scss"
import Categories from './Categories/Categories'


const Home: FC = () => {
	return <div className='home'>
		<div className="home__container"></div>
		<Categories />
	</div>
}

export default Home