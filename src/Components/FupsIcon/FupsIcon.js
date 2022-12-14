import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../../Data/json/icomoon.json";

const Icon = props => {
    const { color, size, icon, className } = props;
    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
};

export default Icon;