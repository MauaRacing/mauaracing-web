"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SelectorProps } from "../../../lib/util/selectorProps";


export function Selector({ selector, data, setSelectedIds, selectedIds }: { selector: SelectorProps, data: Array<{ entityId: number, entityName: string }>, setSelectedIds: Dispatch<SetStateAction<Map<string, string>>>, selectedIds: Map<string, string> }) {
  const [index, setIndex] = useState(-1);
  return (
        <div className="grid grid-cols-5">
          <select
            className="bg-onPrimaryContainer text-onPrimary rounded-lg col-start-2 col-span-3 p-2 my-2"
            name={selector.name} id={`${selector.name}Selector`}
            value={selectedIds.get(selector.name)}
            onChange={(e)=> {
              let tempMap : Map<string, string>= new Map(selectedIds);
              tempMap.set(selector.name, e.target.value);
              setSelectedIds(tempMap);
            }}
            >
                <option className="bg-secondaryContainer text-onSecondaryContainer" value={""} label={""}></option>
                {[...data].map((e, i) => {
                    return <option className="bg-secondaryContainer text-onSecondaryContainer" key={i} value={e.entityId} label={e.entityName}></option>
                })}
            </select>
        </div>
    )
}


