import { IStoreDispatch } from "@/store/store"
import { useDispatch } from "react-redux"

export const useStoreDispatch = () => useDispatch<IStoreDispatch>()