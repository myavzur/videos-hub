import React from "react"
import { BsPersonPlusFill } from 'react-icons/bs'
import cn from "classnames"

import { api } from "@/store/slices/api/api.slice"

import { useStoreSelector } from "@/hooks"
import { SubscriptionResults } from "@/types/entities/channel.interface"

import { ButtonSubscribeProps } from "./ButtonSubscribe.interface"
import styles from './ButtonSubscribe.module.scss'


const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ toChannelId }) => {
  const channel = useStoreSelector(state => state.channel.channel)

  const { data: profile } = api.useGetMyChannelQuery(null, {skip: !channel})
  const [ subscribe, subscribeStatus ] = api.useSubscribeMutation()

  if (channel?.id === toChannelId) {
    return null
  }

  const isSubscribed = 
    profile?.subscriptions.some(
      subscription => subscription.toChannel.id === toChannelId
    ) 
    || 
    subscribeStatus.data?.result === SubscriptionResults.SUBSCRIBED
  
  return (
    <button 
      className={cn(
        styles.button,
        {[styles['button_subscribed']]: isSubscribed}
      )}
      onClick={() => subscribe(toChannelId).unwrap()}
      disabled={subscribeStatus.isLoading}
    >
      <BsPersonPlusFill />
      {isSubscribed ? 'Unsubscribe' : 'Subscribe' }
    </button>
  )
}

export default ButtonSubscribe