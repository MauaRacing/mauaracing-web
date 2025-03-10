"use client";
import { forwardRef, useEffect, useState } from "react";
import { fetchData } from "../../../lib/util/fetchData";
import { SelectorProps } from "../../../lib/util/selectorProps";
import { Selector } from "./selector";

export const DivSelector = forwardRef(function DivSelector(
  props: SelectorProps,
  ref: any,
) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(props).then((response) => setData(response));
  }, [props]);
  return (
    <div
      className="flex flex-col place-content-center items-center content-center mb-9"
      id={`${props.name}Div`}
    >
      <label
        htmlFor={`${props.name}Selector`}
        className="text-onPrimaryContainer w-10/12 mx-2"
      >
        {props.label}
        <Selector props={props} data={data} ref={ref} />
      </label>
    </div>
  );
});
