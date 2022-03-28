import * as React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}></RoughNotationGroup>
      </div>
    </div>
  );
}
