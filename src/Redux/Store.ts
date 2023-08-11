import { combineReducers, configureStore } from "@reduxjs/toolkit"
import categoriesSlice from "./CategoriesReducer"

// Корневой редусер, который объеденит в себе все редусеры
const rootReducer = combineReducers({
	categoriesReducer: categoriesSlice
})

// Функция setupStore возвращает функцию, которая создаст store
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

//получаем тип состояния из редьюсера
export type RootState = ReturnType<typeof rootReducer>
//получаем тип стора
export type AppStore = ReturnType<typeof setupStore>
//получаем тип диспатча. делается для того, чтобы мы не могли задиспатчить те экшены, которые не определили
export type AppDispatch = AppStore['dispatch']
