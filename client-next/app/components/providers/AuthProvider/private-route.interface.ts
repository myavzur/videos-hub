import { NextPage } from "next";

export type NextPageAuth<PageProps = {}> = NextPage<PageProps> & {isPrivatePage?: boolean} 

export interface AuthProviderProps { 
  Component: NextPageAuth
}