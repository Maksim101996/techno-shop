import { ICategory } from './../Types/Category';
import axios from "axios";
import { BASE_URL } from "./API";
import { AppDispatch } from "./Store";
import { categoriesSlice } from './CategoriesReducer';

//У ошибок в TS по умолчанию тип unknown, она может быть чем угодно (грубо говоря, мы можем сделать throw new Promise(() => {}) и это будем ошибка с типом Promise или, аналогично, throw 7 и это будет ошибка с типом number). 
//Для того, чтобы избежать проблем с типизацией и крашей в рантайме я рекомендую использовать следующую функцию для получения message из error: 



function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message
	return String(error)
}
export const fetchCategories = () => async (disptach: AppDispatch) => {
	try {
		disptach(categoriesSlice.actions.fetchCategories())
		const response = await axios.get<ICategory[]>(`${BASE_URL}/categories`)
		disptach(categoriesSlice.actions.fetchCategoriesSucces(response.data))
	}
	catch (e) {
		disptach(categoriesSlice.actions.fetchCategoriesError(getErrorMessage(e)))
	}
}