export interface Assembly{
  assembly_id : number;
  assembly_name : string;
  assembly_number : number;
  assembly_season : number;
}

export interface Subsystem {
  subsystem_id : number;
  subsystem_acronym : string;
  assembly : Assembly[];
};

export interface Team {
  team_id     : number;
  team_name   : string;
  subsystem  : Subsystem[];
};
