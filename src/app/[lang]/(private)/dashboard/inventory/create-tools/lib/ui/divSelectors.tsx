"use client";
import { forwardRef, useEffect, useState } from "react";
import { fetchData } from "../../../lib/util/fetchData";
import { SelectorProps } from "../../../lib/util/selectorProps";
import { Selector } from "./selector";

export const DivSelector = forwardRef(function DivSelector(
  {selector} : {selector : SelectorProps},
  ref : any
) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(selector).then((response) => setData(response));
  }, [selector]);
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
        <Selector props={selector} data={data} ref={ref} />
      </label>
    </div>
  );
});
