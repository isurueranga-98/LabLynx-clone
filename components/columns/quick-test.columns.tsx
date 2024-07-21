"use client";
import { Button } from "@/components/ui/button";
import {
  QuickTest,
  QuickTestPatientSchemaType,
} from "@/lib/schema/quick-test.schema";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { QuickTestTableActions } from "../table-actions/quick-test-table.actions";

export const QuickTestColumns: ColumnDef<QuickTest>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "firstName",
    accessorFn: (row) => row.patientDetails.firstName,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "lastName",
    accessorFn: (row) => row.patientDetails.lastName,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "gender",
    accessorFn: (row) => row.patientDetails.gender,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Gender
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  // {
  //   accessorKey: "age",
  //   accessorFn: (row) => row.patientDetails.lastName,
  //   filterFn: (row, id, value) => value.includes(row.getValue(id)),
  //   header: ({ column }) => (
  //     <Button
  //       variant="ghost"
  //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //     >
  //       Last Name
  //       <ArrowUpDown className="ml-2 h-4 w-4" />
  //     </Button>
  //   ),
  // },
  {
    accessorKey: "phone",
    accessorFn: (row) => row.patientDetails.phone,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Phone
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "test count",
    accessorFn: (row) => row.selectedTests.length,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Test count
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    accessorFn: (row) => row.patientDetails.email,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "referredBy",
    accessorFn: (row) => row.patientDetails.referredBy,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Referred By
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <QuickTestTableActions row={row} />;
    },
  },
];
