import { EmployeeColumns } from "@/components/columns/employee.columns";
import DataTable from "@/components/ui/data-table";
import { readEmployees } from "@/lib/database/employee/read-employee.db";
import { AddEmployeeButton } from "@/components/buttons/add-employee.button";

export const EmployeeTable = async (): Promise<JSX.Element> => {
  const employees = await readEmployees();

  return (
    <DataTable
      columns={EmployeeColumns}
      data={employees!}
      addNewItemButton={<AddEmployeeButton />}
      filterByValues={[
        { columnId: "email", columnName: "Email" },
        { columnId: "firstName", columnName: "First Name" },
        { columnId: "lastName", columnName: "Last Name" },
      ]}
    />
  );
};
