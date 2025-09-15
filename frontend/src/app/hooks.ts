import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { rootState, appDispatch } from "./store";


export const useAppDispatch : ()=>appDispatch = useDispatch
export const useAppSelector :TypedUseSelectorHook<rootState> = useSelector

