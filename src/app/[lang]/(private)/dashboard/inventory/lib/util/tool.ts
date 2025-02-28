export type Tool = {
  index: string
  team: string
  subsystem: string
  tool_type: string
}

type Bench = {
  tool_bench? : Number
  drawer_num? : Number
  locker_num? : Number
}

type Locker = {
  locker? : Number
  drawer_num? : Number
  shelf_num? : Number
}

export type ToolWithPlacement = Tool & Bench & Locker 