import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Tweet";
function Feed(): JSX.Element {
  return (
    <section className="text-xl h-screen border-r border-r-[#2F3336] border-l border-l-[#2F3336] ml-[340px] max-w-[600px]">
      <div className="flex justify-between items-center ml-4 mr-1">
        <p className="my-4 font-bold">Home</p>
        <div className="cursor-pointer icons-hover">
        <SparklesIcon width={25} />
        </div>
      </div>
      <Input/>
    </section>
  );
}

export default Feed;
