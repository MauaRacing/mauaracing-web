export type CADFile = {
  part_number: string
  part_name: string
  team: string
  subsystem: string
  file_type: "ASSEMBLY" | "PART"
  assembly : string
}

