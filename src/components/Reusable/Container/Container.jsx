import React from "react";
const Container = ({
  children,
  className = "",}
) => {
  return (
    <section className={`max-w-[1600px] w-[90%] mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
