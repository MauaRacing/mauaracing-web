export interface SelectorProps{
  name : string;
  url : string;
  label : string;
  entityId : string;
  entityName : string;
  optionalURL? : string;
  optionalId? : number;
}

export const team : SelectorProps = {
  name :"team",
  url : "/team",
  label : "Equipe:",
  entityId : "team_id",
  entityName : "team_name",
}

export const subsystem : SelectorProps = {
  name : "subsystem",
  url : "/subsystem",
  label : "Subsistema:",
  entityId : "subsystem_id",
  entityName : "subsystem_name",
  optionalURL : "/team"
}

export const assembly : SelectorProps = {
  name: "assembly",
  url: "/assembly",
  label: "Assembly:",
  entityId: "assembly_id",
  entityName: "assembly_name",
}

export const fileType : SelectorProps = {
  name: "file_type",
  url : "/file_type",
  label : "Tipo de arquivo:",
  entityId: "file_type_id",
  entityName: "file_type_name",
}

export const seasonProps : SelectorProps = {
  name: "season",
  url : "/season",
  label : "Escolha uma temporada",
  entityId: "season_id",
  entityName: "season_name"
}
