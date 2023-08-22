import React from "react";

interface AlertProps {
  Children: ReactNode;
}

function Alert() {
  return <div className="alert alert-primary">This is alert</div>;
}

export default Alert;
