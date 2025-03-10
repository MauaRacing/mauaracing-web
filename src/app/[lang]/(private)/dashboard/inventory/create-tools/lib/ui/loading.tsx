import { SelectorProps } from "../../../lib/util/selectorProps";

export function Loading(props: SelectorProps) {
  return (
    <div
      className={`row-start-${props.selectorsIndex} grid grid-rows-2 grid-cols-4`}
    >
      <label
        htmlFor={"TeamSelector"}
        className="text-onPrimaryContainer col-span-4"
      >
        {props.label}
      </label>
      <h1 className="bg-secondaryContainer text-onSecondaryContainer rounded-lg col-span-2 col-start-2">
        Carregando...
      </h1>
    </div>
  );
}
