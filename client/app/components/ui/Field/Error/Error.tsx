import React from "react";

import { ErrorProps } from './Error.interface';
import styles from './Error.module.scss';

const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <p className={styles.error}>
      {text}
    </p>
  );
};

export default Error;