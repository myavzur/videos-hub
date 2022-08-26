import React from "react"
import { BsPersonPlusFill } from 'react-icons/bs'
import classNames from "classnames"

import { api } from "@/store/slices/api/api.slice"

import { useAuth } from "@/hooks"
import { SubscriptionResults } from "@/types/entities/channel.interface"

import { ButtonSubscribeProps } from "./ButtonSubscribe.interface"
import styles from './ButtonSubscribe.module.scss'


const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ toChannelId }) => {
  const { channel } = useAuth()

  const { data } = api.useGetMyChannelQuery(null, { 
    skip: !channel 
  })
  const [ subscribe, subscribeStatus ] = api.useSubscribeMutation()

  if (channel?.id === toChannelId) {
    return null
  }

  const isSubscribed = 
    data?.subscriptions.some(
      subscription => subscription.toChannel.id === toChannelId
    ) 
    || 
    subscribeStatus.data?.result === SubscriptionResults.SUBSCRIBED
  
  return (
    <button 
      className={classNames(
        styles.button,
        {[styles['button--subscribed']]: isSubscribed}
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