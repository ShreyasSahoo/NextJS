"use client";
import { usePathname } from "next/navigation";
const DashPage = () => {
  const path = usePathname(); //only works in client components
  return (
    <>
      {path}
      <section style={{ height: "100vh", backgroundColor: "blue" }}>
        blue
      </section>
      <section style={{ height: "100vh", backgroundColor: "green" }}>
        green
      </section>
      <section style={{ height: "100vh", backgroundColor: "red" }} id="red">
        red
      </section>
    </>
  );
};

export default DashPage;
