"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
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
import { CADFile } from "../../lib/util/cadFile"

export const columns: ColumnDef<CADFile>[] = [
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
        accessorKey: "file_type",
        header: () => <div className="text-center font-semibold">Tipo do arquivo</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("file_type")}</div>
    },
    {
        accessorKey: "part_number",
        header: () => <div className="text-center font-semibold">Part Number</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("part_number")}</div>

    },
    {
        accessorKey: "part_name",
        header: () => <div className="text-center font-semibold">Part Name</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("part_name")}</div>

    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { toast } = useToast();
            const file = row.original;
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
                                        navigator.clipboard.writeText(file.part_name)
                                        toast({
                                            description: "Index da ferramenta copiado",
                                            duration: 1500
                                        })
                                    }
                                    }
                                >
                                    Copiar File Name
                                </DropdownMenuItem>
                                <Separator />
                                <DropdownMenuItem>Editar Arquivo</DropdownMenuItem>
                                <Separator />
                                <DropdownMenuItem>Criar Nova Versão</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Dialog>
                </div>
            )
        },
    }
]
