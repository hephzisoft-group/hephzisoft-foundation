import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />

      <main className="pt-16">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
