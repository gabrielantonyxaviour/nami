"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeAgo } from "@/lib/utils";
import { idToChainInfo } from "@/lib/constants";
import { baseSepolia, kinto, polygonAmoy, sepolia } from "viem/chains";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { useEnvironmentStore } from "../context";

// Sample data and types
const data: Donation[] = [
  {
    id: "1",
    address: "0x3A1D4A8433e893E7B1dD6aAa2A91fB2e9f54D1F2",
    timestamp: "2024-11-17T09:30:00Z",
    chainId: sepolia.id,
    transaction: "0x5d5b5f84cd3b3d1f563d3b28f5e13ff3a9f0f2c7",
    attestation: "0x8b8e6b84dd6f1d3e2e8f2e3d4d5d6f7f3e2d3e3a",
    amount: 316,
  },
  {
    id: "2",
    address: "0x6b2C4D7E8Cdb8b3b2F8d6C2e4c91d1f3a9d9F8E3",
    timestamp: "2024-11-17T10:45:00Z",
    chainId: baseSepolia.id,
    transaction: "0x9f9e9d9c7b5a3e2b2c5c6d3d3d3e3f5f9f3a9c5a",
    attestation: "0x2e3f3d7c6b9d1d2f5f9f7e6d3a8f9b3c9a5f6e7a",
    amount: 242,
  },
  {
    id: "3",
    address: "0x5e3A9B2c3B8b4F9f8D2f5C6d1A8e3e7f3C9f9F7a",
    timestamp: "2024-11-17T11:15:00Z",
    chainId: kinto.id,
    transaction: "0x1f5a9d6c3b8d4a5f9f6f3e2b9c5f7d3d9a2f1e3c",
    attestation: "0x3d7b9a2f6e3c1b5a4e8c7f9f1e3f4d9a5b6c9d2f",
    amount: 837,
  },
  {
    id: "4",
    address: "0x7a2D8f9f4D5b8a3e9D6c1b7f2e5d4c8f9b3c5f1a",
    timestamp: "2024-11-17T12:30:00Z",
    chainId: baseSepolia.id,
    transaction: "0x8f6c5a2f9d7b1e3c5e9d2f8f3a4c9b7f6a1d9e2c",
    attestation: "0x9f7b5d3a4f8c1e6c3b9d2e3f5c9d1f3a8b7c6d2e",
    amount: 874,
  },
  {
    id: "5",
    address: "0x4f5B2a9f3D7d8e1c9f6f2a5b8c4d9b3c7a1e5f3d",
    timestamp: "2024-11-17T13:25:00Z",
    chainId: polygonAmoy.id,
    transaction: "0x6d3f2e9c5b7a1e4f9f8d2f3d1c5a6e9d8f3b2a5f",
    attestation: "0x7f5e3c2b4a9d1e6c8f9f3d5b6a7f1d9c5e8f4d2b",
    amount: 721,
  },
];

export type Donation = {
  id: string;
  address: string;
  timestamp: string;
  chainId: number;
  amount: number;
  transaction: string;
  attestation: string;
};

const columns: ColumnDef<Donation>[] = [
  {
    id: "select",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-transparent sen font-semibold"
      >
        Order
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <p className="sen text-center pr-4">{row.id}</p>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "address",
    header: ({ column }) => <p className="sen font-semibold">Address</p>,
    cell: ({ row }) => (
      <div className="sen text-left">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-transparent sen font-semibold"
      >
        Amount (USD)
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-transparent sen font-semibold"
      >
        Time
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <p className="sen text-center  font-medium">
          {timeAgo(row.getValue("timestamp"))}
        </p>
      );
    },
  },
  {
    accessorKey: "chainId",
    header: ({ column }) => (
      <p className="sen font-semibold text-center">Chain</p>
    ),
    cell: ({ row }) => {
      return (
        <div className="sen text-center ">
          {
            idToChainInfo[(row.getValue("chainId") || baseSepolia.id) as number]
              .name
          }
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const donation = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-transparent"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="sen">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="px-4 cursor-pointer focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0"
              onClick={() => {
                const chainId = (row.getValue("chainId") ||
                  baseSepolia.id) as number;
                window.open(
                  idToChainInfo[chainId].blockExplorer +
                    "/address/" +
                    donation.transaction +
                    "#tokentxns"
                );
              }}
            >
              View Tx
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-4 cursor-pointer focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0"
              onClick={() => {
                const chainId = (row.getValue("chainId") ||
                  baseSepolia.id) as number;
                window.open(
                  "https://testnet-scan.sign.global/attestation/" +
                    donation.attestation
                );
              }}
            >
              View Attestaion
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 cursor-pointer focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0">
              View NFT
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// DataTable component using ShadCN
export default function DonationsTable({ apply }: { apply: boolean }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [open, setOpen] = React.useState(false);
  const [chain, setChain] = React.useState("0");
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const { overallDonations } = useEnvironmentStore((store) => store);

  const table = useReactTable({
    data: apply
      ? data
      : overallDonations > 0
      ? [
          {
            id: "1",
            address: "0x0429A2Da7884CA14E53142988D5845952fE4DF6a",
            timestamp: new Date(Date.now() - 30 * 1000).toISOString(),
            chainId: polygonAmoy.id,
            transaction: "0xace8655de7f2a1865ddd686cfcdd47447b86965c",
            attestation: "0x8b8e6b84dd6f1d3e2e8f2e3d4d5d6f7f3e2d3e3a",
            amount: 10,
          },
        ]
      : [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter addresses..."
          value={(table.getColumn("address")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("address")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`ml-2 sen font-semibold focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0 ${
                chain !== "0" && "text-black font-bold"
              }`}
            >
              {table.getColumn("chainId")?.getFilterValue() == "0"
                ? "Chain"
                : idToChainInfo[
                    (table.getColumn("chainId")?.getFilterValue() ||
                      sepolia.id) as number
                  ].name}
              {open ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full sen">
            <DropdownMenuRadioGroup
              value={chain}
              onValueChange={(value: string) => {
                console.log(value);
                table.getColumn("chainId")?.setFilterValue(value);
                setChain(value);
              }}
            >
              <DropdownMenuRadioItem value="0">Chain</DropdownMenuRadioItem>
              {Object.values(idToChainInfo).map((chainInfo) => (
                <DropdownMenuRadioItem
                  key={chainInfo.chainId}
                  value={chainInfo.chainId.toString()}
                >
                  {chainInfo.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {data.length == 0 ? "No donations yet." : "No results. "}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
