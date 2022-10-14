import Link from "next/link"
import React from "react"
import { BiDoorOpen } from "react-icons/bi"
import styles from './AuthorizationLinks.module.scss'

const AuthorizationLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      <Link href="/authorization">
        <a> 
          <BiDoorOpen/>
        </a>
      </Link>

      <Link href="/registration">
        <a> Sign Up </a>
      </Link>
    </div>
  )
}

export default AuthorizationLinks