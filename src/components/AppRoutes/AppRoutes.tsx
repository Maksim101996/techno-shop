import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

const AppRoutes: FC = () => {
	return <div className="appRoutes">
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	</div>
}

export default AppRoutes