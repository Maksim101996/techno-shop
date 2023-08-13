import { FC } from 'react'
import "./Home.scss"
import PosterSwipe from './Poster/PosterSwipe'
const Home: FC = () => {
	return <div className='home'>
		<div className="home__container"></div>
		<PosterSwipe />
	</div>
}

export default Home