import DataTable from "@/components/ui/data-table";
import { readQuickTests } from "@/lib/database/quick-test/read-quick-tests.db";
import { QuickTestColumns } from "../columns/quick-test.columns";

export const QuickTestTable = async (): Promise<JSX.Element> => {
  const quickTests = await readQuickTests();

  return (
    <DataTable
      columns={QuickTestColumns}
      data={quickTests!}
      addNewItemButton={<></>}
      filterByValues={[
        { columnId: "firstName", columnName: "First Name" },
        { columnId: "lastName", columnName: "Last Name" },
        { columnId: "id", columnName: "Referece No" },
        { columnId: "gender", columnName: "Gender" },
        { columnId: "phonr", columnName: "Phone" },
      ]}
    />
  );
};
