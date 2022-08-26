import Channel from "@/components/ui/Channel"
import { useAuth, useOutside, useStoreDispatch } from "@/hooks"
import { api } from "@/store/slices/api/api.slice"
import classNames from "classnames"
import React from "react"
import { GoChevronUp } from 'react-icons/go'
import { CurrentProps } from "./Current.interface"
import styles from './Current.module.scss'


const Current: React.FC<CurrentProps> = ({ channel }) => {
  const dispatch = useStoreDispatch()
  const [ ref, isVisible, setVisible ] = useOutside(false)

  return (
    <div  className={styles.current}>
      <div className={styles.current__avatar}>
        <Channel.Avatar channel={channel} />
      </div>

      <span className={styles.current__name}>
        <Channel.Name channel={channel}/>
      </span>
    </div>
  )
}

export default Current