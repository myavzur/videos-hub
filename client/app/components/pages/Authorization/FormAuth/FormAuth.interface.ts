import { IChannel } from "@/types/entities"

export interface FormAuthProps {
  
}

export type FormAuthFields = Pick<Required<IChannel>, 'email' | 'password'>