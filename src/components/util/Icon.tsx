import React from "react";

 interface icon {
    type: any
    className?: string
  }
  
  const Icon = (props: icon) => {
  
    const { type, className } = props;
    return (
        <>{React.createElement(type, { className: className })}</>
    )
  
  }

  export default Icon