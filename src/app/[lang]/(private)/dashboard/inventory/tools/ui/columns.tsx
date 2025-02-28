"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Tool, ToolWithPlacement } from "../../lib/util/tool"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const columns: ColumnDef<ToolWithPlacement>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "index",
    header: () => <div className="text-center font-semibold">Index</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("index")}</div>

  },
  {
    accessorKey: "team",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-center font-semibold"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
            Equipe
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("team")}</div>,
  },
  {
    accessorKey: "subsystem",
    header: () => <div className="text-center font-semibold">Subsistema</div>
    ,
    cell: ({ row }) => <div className="text-center">{row.getValue("subsystem")}</div>
  },
  {
    accessorKey: "tool_type",
    header: () => <div className="text-center font-semibold">Tipo da Ferramenta</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("tool_type")}</div>
  },
  {
    accessorKey: "placement",
    header: () => <div className="text-center font-semibold">Local</div>,
    cell: ({row}) => {
      const tool = row.original;
      return(
    <div className="text-center">
      {tool.tool_bench ? (<p>Ferramenteiro: {`${tool.tool_bench}`}</p>) : null}
      {tool.locker ? (<p>Armário: {`${tool.locker}`}</p>) : null}
      {tool.drawer_num ? (<p>Gaveta: {`${tool.drawer_num}`}</p>) : null}
      {tool.locker_num ? (<p>Armário do Ferramenteiro: {`${tool.locker_num}`}</p>) : null}
      {tool.shelf_num ? (<p>Prateleira: {`${tool.shelf_num}`}</p>) : null}
    </div>)}
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { toast } = useToast();
      const tool = row.original;
      return (
        <div className="flex justify-center">
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Abrir Menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(tool.index)
                    toast({
                      description: "Index da ferramenta copiado",
                      duration: 1500
                    })
                  }
                  }
                >
                  Copiar Index da Ferramenta
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>Editar Ferramenta</DropdownMenuItem>
                <Separator />
                <DialogTrigger className="pl-2 pt-1 text-sm">Ver mais detalhes</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Local</DialogTitle>
                    <DialogDescription>
                      {tool.tool_bench ? (<p>Ferramenteiro: {`${tool.tool_bench}`}</p>) : null}
                      {tool.locker ? (<p>Armário: {`${tool.locker}`}</p>) : null}
                      {tool.drawer_num ? (<p>Gaveta: {`${tool.drawer_num}`}</p>) : null}
                      {tool.locker_num ? (<p>Armário do Ferramenteiro: {`${tool.locker_num}`}</p>) : null}
                      {tool.shelf_num ? (<p>Prateleira: {`${tool.shelf_num}`}</p>) : null}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        </div>
      )
    },
  }
]
