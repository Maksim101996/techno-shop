import { AppDispatch, RootState } from './../Redux/Store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



// Типизированный диспатч
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Типизированный юзСелектор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector