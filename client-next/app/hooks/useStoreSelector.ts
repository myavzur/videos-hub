import { IStoreState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useStoreSelector: TypedUseSelectorHook<IStoreState> = useSelector