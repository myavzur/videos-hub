import React, { forwardRef, useState } from "react";

import Field, { FieldProps } from "@/components/ui/Field";

import { FaLock, FaLockOpen } from "react-icons/fa";

const Password = forwardRef<HTMLInputElement, FieldProps>(( 
  props, 
  ref 
) => {  
  const [ isVisible, setVisible ] = useState(true);

  return (
    <Field.Default
      {...props}
      ref={ref}
      icon={isVisible ? FaLockOpen : FaLock}
      type={isVisible ? 'text' : 'password'}
      placeholder={props.placeholder || "Enter your Password ☯️"}
      autoComplete="new-off"
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
    />
  )
})

Password.displayName = 'FieldPassword'

export default Password;