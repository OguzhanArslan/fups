import React, { useState } from "react";
import classnames from "classnames";

import styles from "./FloatLabel.module.scss";

const FloatLabel = props => {
    const [ focus, setFocus ] = useState(false);
    const { children, label, value } = props;

    return (
        <div className={styles.float} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
            {children}
            <label className={classnames({
                [styles["float__label"]]: true,
                [styles["float__label--active"]]: focus || (value && value.length !== 0),
            })}>{label}</label>
        </div>
    );
};

export default FloatLabel;
