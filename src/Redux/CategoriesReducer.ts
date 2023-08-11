import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../Types/Category";


//Тип для одного товара в списке
interface categoriesStateTypes {
	list: ICategory[],
	isLoading: boolean,
	error: string
}

//начальное состояние
const initialState: categoriesStateTypes = {
	list: [],
	isLoading: false,
	error: ""
}

export const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	// reducers это как конструкция switch-case, каждый кейс как отдельный редусер
	reducers: {
		//для примера типизация пэйлоада экшена 
		fetchCategories(state) {
			state.isLoading = true
		},
		fetchCategoriesSucces(state, action: PayloadAction<ICategory[]>) {
			state.isLoading = false
			state.error = ""
			state.list = action.payload
		},
		fetchCategoriesError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		}
	}
})


export default categoriesSlice.reducer
// export const { increment } = categoriesSlice.actions