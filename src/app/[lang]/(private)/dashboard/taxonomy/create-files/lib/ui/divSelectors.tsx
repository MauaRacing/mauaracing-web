"use client";
import { Dispatch, forwardRef, SetStateAction, useEffect, useState } from "react";
import { SelectorProps } from "../../../lib/util/selectorProps";
import { Selector } from "./selector";

export function DivSelector({selector, data, setSelectedIds, selectedIds} : {selector : SelectorProps, data : Array<any>, setSelectedIds: Dispatch<SetStateAction<Map<string,string>>>, selectedIds : Map<string,string>}){
  return (
    <div
      className="flex flex-col place-content-center items-center content-center mb-9"
      id={`${selector.name}Div`}
    >
      <label
        htmlFor={`${selector.name}Selector`}
        className="text-onPrimaryContainer w-10/12 mx-2"
      >
        {selector.label}
        <Selector selector={selector} data={data} setSelectedIds={setSelectedIds} selectedIds={selectedIds}/>
      </label>
    </div>
  );
}
