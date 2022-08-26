import classNames from "classnames"
import React, { forwardRef } from "react"

import { FieldProps } from './Field.interface'
import styles from './Field.module.scss'


const Field = forwardRef<HTMLInputElement, FieldProps>(( props, ref ) => {
  const { 
    icon, isError, isDirty,
    ...inputAttributes 
  } = props
  
  return (
    <label 
      className={classNames(
        styles.field,
        { 
          // [styles['field--required']]: field?.isRequired,
          [styles['field--error']]: isError,
          [styles['field--success']]: !isError && isDirty
        }
      )}
    >
      {props.icon && (
        <props.icon className={styles.icon} />
      )}

      <input 
        {...inputAttributes} 
        ref={ref} 
        className={styles.input} 
      />
    </label>
  )
})

Field.displayName = 'Field'

export default Field