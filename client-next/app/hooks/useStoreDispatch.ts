import { useDispatch } from "react-redux"

import { IStoreDispatch } from "@/store/store"

export const useStoreDispatch = () => useDispatch<IStoreDispatch>()