import React, { forwardRef } from "react"

import { FieldProps } from './Field.interface'
import styles from './Field.module.scss'


const Field = forwardRef<HTMLInputElement, FieldProps>(
  ( { field, ...inputAttributes }, ref ) => {
    return (
      <label className={styles.field}>
        {field.legend && (
          <legend className={styles.legend}>
            {field.legend}
          </legend>
        )}

        {field.description && (
          <p className={styles.description}>
            {field.description}
          </p>
        )}
        
        <input 
          ref={ref} 
          className={styles.input} 
          {...inputAttributes} 
        />
      </label>
    )
  }
)

Field.displayName = 'Field'

export default Field