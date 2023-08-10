import { combineReducers, configureStore } from "@reduxjs/toolkit"
import categoriesSlice from "./categoriesSlice"

// Корневой редусер, который объеденит в себе все редусеры
const rootReducer = combineReducers({
	categoriesReducer: categoriesSlice
})

// Функция setupStore создаст store
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']