import React, { Suspense, ReactNode } from "react";
import { Outlet, Routes } from "react-router-dom";

type BlankLayoutProps = {
  children?: ReactNode;
};

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
  return <>{children || <Outlet />}</>;
};

export default React.memo(BlankLayout);
