import { AppDispatch, RootState } from './../Redux/Store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



// Типизированный диспатч, кастомный хук
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Типизированный юзСелектор, кастомный хук
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector