import { TypedUseSelectorHook, useSelector } from "react-redux";

import { IStoreState } from "@/store/store";

export const useStoreSelector: TypedUseSelectorHook<IStoreState> = useSelector