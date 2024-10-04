import Nav from "./components/nav";
import React from "react";

export default function Home() {
  return(
    <div>
    <Nav/>
    <div className="flex gap-10 flex-col items-center mt-20">
    <h1 className="bg-blue-100 text-2x1 py-2 px-10 font-semibold"> Hello!! </h1>
    <h1 className="bg-blue-100 text-2x1 py-2 px-10 font-semibold"> Welcome to my Next.js application</h1>
    <p className="bg-blue-100 text-2x1 py-2 px-10 font-semibold">Application with country name with its capital and population</p>
    </div>
    </div>
  )
};