import { useStoreSelector } from "./useStoreSelector"

export const useAuth = () => useStoreSelector(state => state.channel)