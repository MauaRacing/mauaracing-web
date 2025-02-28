export interface SelectorProps{
  name : string;
  url : string;
  label : string;
  entityId : string;
  entityName : string;
  optionalURL? : string;
  optionalId? : number;
  selectorsIndex : number;
}

export const team : SelectorProps = {
  name :"team",
  url : "/team",
  label : "Escolha uma Equipe:",
  entityId : "team_id",
  entityName : "team_name",
  selectorsIndex : 0
}

export const subsystem : SelectorProps = {
  name : "subsystem",
  url : "/subsystem",
  label : "Escolha um Subsistema:",
  entityId : "subsystem_id",
  entityName : "subsystem_name",
  selectorsIndex : 1,
  optionalURL : "/team"
}

export const locker : SelectorProps = {
  name : "locker",
  url : "/locker",
  label : "Escolha um Armário:",
  entityId : "locker_id",
  entityName : "locker_id",
  selectorsIndex : 2,
  optionalURL : "/subsystem"
}

export const locker_drawer : SelectorProps = {
  name : "locker_drawer",
  url : "/locker-drawer",
  label : "Escolha uma Gaveta",
  entityId : "drawer_num",
  entityName : "drawer_num",
  selectorsIndex : 4
}

export const locker_shelf : SelectorProps = {
  name : "locker_shelf",
  url : "/locker-shelf",
  label : "Escolha uma Prateleira",
  entityId : "shelf_num",
  entityName : "shelf_num",
  selectorsIndex : 5
}

export const tool_bench : SelectorProps = {
  name : "tool_bench",
  url : "/tool-bench",
  label : "Escolha um Ferramenteiro:",
  entityId : "tool_bench_id",
  entityName : "tool_bench_id",
  selectorsIndex : 3,
  optionalURL : "/subsystem"
}

export const bench_drawer : SelectorProps = {
  name : "bench_drawer",
  url : "/bench-drawer",
  label : "Escolha uma Gaveta:",
  entityId : "drawer_num",
  entityName : "drawer_num",
  selectorsIndex : 4
}

export const bench_locker : SelectorProps = {
  name : "bench_locker",
  url : "/bench-locker",
  label : "Escolha um Armário",
  entityId : "locker_num",
  entityName : "locker_num",
  selectorsIndex : 5
}

export const tool_type : SelectorProps = {
  name : "tool_type",
  url : "/tool-type",
  label : "Escolha um Tipo de Ferramenta:",
  entityId : "tool_type_id",
  entityName : "tool_type_name",
  selectorsIndex : 6
}
