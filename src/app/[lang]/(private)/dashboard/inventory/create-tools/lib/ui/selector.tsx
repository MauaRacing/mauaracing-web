"use client";
import { ChangeEvent, forwardRef} from "react";

export const Selector = forwardRef( function Selector({ props, data}: any, ref : any) {

    function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
        if(ref){
            ref.current[props.selectorsIndex] = e.target.value;
        }
    }

    return (
        <div className="grid grid-cols-5">
            <select className="bg-onPrimaryContainer text-onPrimary rounded-lg col-start-2 col-span-3 p-2 my-2" name={props.name} id={`${props.name}Selector`} value={ref?.current[props.selectorsIndex]} onChange={handleOnChange}>
                <option className="bg-secondaryContainer text-onSecondaryContainer" value={""} label={""}></option>
                {[...data].map((e, i) => {
                    return <option className="bg-secondaryContainer text-onSecondaryContainer" key={i} value={e[props.entityId]} label={e[props.entityName]}></option>
                })}
            </select>
        </div>
    )
});


