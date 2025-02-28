"use client"
import { ChangeEvent, useRef, useState } from "react";
import { DivSelector } from "./divSelectors";
import {
    SelectorProps, team, subsystem, locker,
    locker_drawer, locker_shelf, tool_bench,
    bench_drawer, bench_locker, tool_type
} from "../util/selectorProps";
import { formAction } from "../actions/formAction";
import Link from "next/link";


export function Form() {
    const [selectors, setSelectors] = useState([team]);
    const [disabled, setDisabled] = useState(true);
    const itemsRef = useRef<Array<string>>(["", "", "", "", "", "", ""]);

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
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if (value == "") {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else {
                    subsystem.optionalId = +value;
                    setSelectors([{ ...team }, { ...subsystem }]);
                }
                break;
            }

            case subsystem.name: {
                const index = subsystem.selectorsIndex + 1;
                itemsRef.current.forEach((el, i) => {
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if (value == "") {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else {
                    locker.optionalId = +value;
                    tool_bench.optionalId = +value;
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }]);
                }
                break;
            }
            case locker.name: {
                const index = tool_bench.selectorsIndex + 1;
                itemsRef.current.forEach((el, i) => {
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if ((value == "" && selectorValues[3] == "") || (selectorValues[2] != "" && selectorValues[3] != "")) {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else if (selectorValues[3] != "") {
                    bench_drawer.optionalId = +selectorValues[3];
                    bench_locker.optionalId = +selectorValues[3];
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...bench_drawer }, { ...bench_locker }]);
                }
                else {
                    locker_drawer.optionalId = +value;
                    locker_shelf.optionalId = +value;
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...locker_drawer }, { ...locker_shelf }]);
                }
                break;
            }
            case tool_bench.name: {
                const index = tool_bench.selectorsIndex + 1;
                itemsRef.current.forEach((el, i) => {
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if ((value == "" && selectorValues[2] == "") || (selectorValues[2] != "" && selectorValues[3] != "")) {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else if (selectorValues[2] != "") {
                    locker_drawer.optionalId = +selectorValues[2];
                    locker_shelf.optionalId = +selectorValues[2];
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...locker_drawer }, { ...locker_shelf }]);
                }
                else {
                    bench_drawer.optionalId = +value;
                    bench_locker.optionalId = +value;
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...bench_drawer }, { ...bench_locker }]);
                }
                break;
            }
            case locker_drawer.name:
            case locker_shelf.name: {
                const index = locker_shelf.selectorsIndex + 1;
                itemsRef.current.forEach((el, i) => {
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if ((selectorValues[4] == "" && selectorValues[5] == "") || (selectorValues[4] != "" && selectorValues[5] != "")) {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else {
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...locker_drawer }, { ...locker_shelf }, { ...tool_type }]);
                }
                break;
            }
            case bench_drawer.name:
            case bench_locker.name: {
                const index = bench_locker.selectorsIndex + 1;
                itemsRef.current.forEach((el, i) => {
                    i >= index ? itemsRef.current[i] = "" : itemsRef.current[i] = el;
                })
                if ((selectorValues[4] == "" && selectorValues[5] == "") || (selectorValues[4] != "" && selectorValues[5] != "")) {
                    const newSel = selectors.slice(0, index);
                    setSelectors(newSel);
                }
                else {
                    setSelectors([{ ...team }, { ...subsystem }, { ...locker }, { ...tool_bench }, { ...bench_drawer }, { ...bench_locker }, { ...tool_type }]);
                }
                break;
            }
            case tool_type.name:
                setSelectors([...selectors]);
                if (value == "") {
                    setDisabled(true);
                }
                else {
                    setDisabled(false);
                }
                break;
            default:
                break;
        }
    }

    return (
        <form className="grid grid-rows-5 gap-5 min-h-max w-[600px] bg-primaryContainer rounded-lg mt-10" action={async (formData) =>await formAction(formData)} onChange={handleOnChange}>
            <section className="mt-8">
                {selectors.map((e: SelectorProps, i: number) => {
                    return (
                        <DivSelector {...e} key={i}
                            ref={itemsRef} />
                    )
                })}
                <div className="flex place-content-center items-center content-center mt-10">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <Link className="bg-secondary text-onSecondary border rounded-xl text-center w-56 p-2" href={"/"}>Voltar</Link>
                        <button className="disabled:bg-emerald-100 disabled:text-black bg-secondary text-onSecondary border rounded-xl text-center w-56 p-2" disabled={disabled}>Enviar</button>
                    </div>
                </div>
            </section>
        </form>
    )
}