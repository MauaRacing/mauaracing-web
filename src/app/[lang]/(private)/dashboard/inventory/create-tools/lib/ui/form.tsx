"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
    bench_drawer,
    bench_locker,
    locker,
    locker_drawer,
    locker_shelf,
    SelectorProps,
    subsystem,
    team,
    tool_bench,
    tool_type,
} from "../../../lib/util/selectorProps";
import { formAction } from "../actions/formAction";
import { DivSelector } from "./divSelectors";

export function Form({ lang }: { lang: string }) {
  const [selectors, setSelectors] = useState([team]);
  const [disabled, setDisabled] = useState(true);
  const itemsRef = useRef<Array<string>>(["", "", "", "", "", "", ""]);
  
  // useEffect(() =>{
  //   if (typeof window !== "undefined") {
  //     setSelectors([team]);
  //     const storedData = localStorage.getItem("storedRef");
  //     if(!storedData){
  //       return;
  //     }
  //     itemsRef.current = JSON.parse(storedData);
  //   }
  // }, []);
  // useEffect(() =>{
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("storedRef",JSON.stringify(itemsRef.current));
  //   }
  // }, [itemsRef.current.values()]);

  function handleOnChange(e: ChangeEvent<HTMLFormElement>) {
    // console.log(e);
    setDisabled(true);
    const form = e.currentTarget;
    const selector = e.target;
    const value = e.target.value;
    const selectorValues = itemsRef.current;

    const selectorName = e.target.name;
    switch (selectorName) {
      case team.name: {
        const index = team.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (value == "") {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else {
          subsystem.optionalId = +value;
          setSelectors([{ ...team }, { ...subsystem }]);
        }
        break;
      }

      case subsystem.name: {
        const index = subsystem.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (value == "") {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else {
          locker.optionalId = +value;
          tool_bench.optionalId = +value;
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
          ]);
        }
        break;
      }
      case locker.name: {
        const index = tool_bench.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (
          (value == "" && selectorValues[3] == "") ||
          (selectorValues[2] != "" && selectorValues[3] != "")
        ) {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else if (selectorValues[3] != "") {
          bench_drawer.optionalId = +selectorValues[3];
          bench_locker.optionalId = +selectorValues[3];
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...bench_drawer },
            { ...bench_locker },
          ]);
        } else {
          locker_drawer.optionalId = +value;
          locker_shelf.optionalId = +value;
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...locker_drawer },
            { ...locker_shelf },
          ]);
        }
        break;
      }
      case tool_bench.name: {
        const index = tool_bench.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (
          (value == "" && selectorValues[2] == "") ||
          (selectorValues[2] != "" && selectorValues[3] != "")
        ) {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else if (selectorValues[2] != "") {
          locker_drawer.optionalId = +selectorValues[2];
          locker_shelf.optionalId = +selectorValues[2];
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...locker_drawer },
            { ...locker_shelf },
          ]);
        } else {
          bench_drawer.optionalId = +value;
          bench_locker.optionalId = +value;
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...bench_drawer },
            { ...bench_locker },
          ]);
        }
        break;
      }
      case locker_drawer.name:
      case locker_shelf.name: {
        const index = locker_shelf.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (
          (selectorValues[4] == "" && selectorValues[5] == "") ||
          (selectorValues[4] != "" && selectorValues[5] != "")
        ) {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else {
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...locker_drawer },
            { ...locker_shelf },
            { ...tool_type },
          ]);
        }
        break;
      }
      case bench_drawer.name:
      case bench_locker.name: {
        const index = bench_locker.selectorsIndex + 1;
        itemsRef.current.forEach((el, i) => {
          i >= index ? (itemsRef.current[i] = "") : (itemsRef.current[i] = el);
        });
        if (
          (selectorValues[4] == "" && selectorValues[5] == "") ||
          (selectorValues[4] != "" && selectorValues[5] != "")
        ) {
          const newSel = selectors.slice(0, index);
          setSelectors(newSel);
        } else {
          setSelectors([
            { ...team },
            { ...subsystem },
            { ...locker },
            { ...tool_bench },
            { ...bench_drawer },
            { ...bench_locker },
            { ...tool_type },
          ]);
        }
        break;
      }
      case tool_type.name:
        setSelectors([...selectors]);
        if (value == "") {
          setDisabled(true);
        } else {
          setDisabled(false);
        }
        break;
      default:
        break;
    }
  }

  return (
    <form
      className="flex flex-col gap-5 min-h-[600px] w-[600px] bg-gray-100 rounded-lg mt-10"
      action={(formData) => formAction(formData)}
      onChange={handleOnChange}
    >
      <section>
         <div className="flex justify-between gap-4">
            <Link
              className="text-center p-2"
              href={`/${lang}/dashboard/inventory`}
            >
              <ArrowLeft/>
            </Link>
          </div>
      </section>
      <section className="mt-2">
        {selectors.map((e: SelectorProps, i: number) => {
          return <DivSelector selector={e} key={i} ref={itemsRef} />;
        })}
        <div className="flex place-content-center items-center content-center mt-10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <button
              className="bg-secondary text-onSecondary border rounded-xl text-center w-56 p-2"
              onClick={(e) =>{
                e.preventDefault();
                setSelectors([team]);
                for(let i = 0; i < itemsRef.current.length; i++){
                  itemsRef.current[i] = "";
                }
              }}
            >
              Limpar
            </button>
            <button
              className="disabled:bg-emerald-100 disabled:text-black bg-blue-500 border rounded-xl text-center w-56 p-2"
              disabled={disabled}
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
    </form>
  );
}
