export type CADFile = {
  part_number: string
  part_name: string
  team: string
  subsystem: string
  file_type: "assembly" | "part"
  assembly : string
}

