import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../Types/IProduct";


//Тип для одного товара в списке
interface categoriesStateTypes {
	list: IProduct[]
}

//начальное состояние
const initialState: categoriesStateTypes = {
	list: []
}

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		//для примера типизация пэйлоада экшена
		// increment(state, action: PayloadAction<number>)
	}
})


export default categoriesSlice.reducer