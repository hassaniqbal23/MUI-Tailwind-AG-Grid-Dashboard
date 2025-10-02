"use client";

import { useMemo, FC } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { TableRowData } from "@/types/dashboard";

// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";

// Custom Theme
import "@/styles/ag-grid-theme.css";

import {
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface AgGridTableProps {
  rowData: TableRowData[];
}

// Status Badge Renderer
const StatusCellRenderer = (params: any) => {
  const statusColors: Record<string, string> = {
    active: "bg-green-500/20 text-green-400 border-green-500/30",
    inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[params.value] || ""}`}
    >
      {params.value}
    </span>
  );
};

// Currency Formatter
const CurrencyFormatter = (params: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(params.value);
};

export const AgGridTable: FC<AgGridTableProps> = ({ rowData }) => {
  const columnDefs: ColDef<TableRowData>[] = useMemo(
    () => [
      { field: "name", headerName: "Name", filter: "agTextColumnFilter", sortable: true, flex: 1, minWidth: 150 },
      { field: "email", headerName: "Email", filter: "agTextColumnFilter", sortable: true, flex: 1, minWidth: 200 },
      { field: "status", headerName: "Status", filter: "agSetColumnFilter", sortable: true, cellRenderer: StatusCellRenderer, width: 120 },
      { field: "role", headerName: "Role", filter: "agSetColumnFilter", sortable: true, width: 120 },
      { field: "lastActive", headerName: "Last Active", filter: "agDateColumnFilter", sortable: true, width: 140 },
      { field: "revenue", headerName: "Revenue", filter: "agNumberColumnFilter", sortable: true, valueFormatter: CurrencyFormatter, width: 130 },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      suppressMovable: true,
      cellClass: "ag-cell-custom",
    }),
    []
  );

  return (
    <div
      className="dashboard-card p-6 animate-fade-in"
      style={{ animationDelay: "300ms" }}
      role="region"
      aria-label="Data table"
    >
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <p className="text-sm text-gray-400 mt-1">View and manage user data</p>
      </div>

      <div className="ag-theme-quartz-dark w-full" style={{ height: 500 }}>
        <AgGridReact
          theme={"legacy"}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          animateRows={true}
          rowSelection="multiple"
          suppressCellFocus={true}
          enableCellTextSelection={true}
          overlayLoadingTemplate={`
            <div class="ag-overlay-loading-center" style="background: rgba(30,30,47,0.9); color: #fff; padding: 20px; border-radius: 8px;">
              <span class="ag-overlay-loading-center">⏳ Loading data...</span>
            </div>
          `}
          loadingOverlayComponentParams={{
            loadingMessage: "Please wait while data is loading...",
          }}
          

        />
      </div>
    </div>
  );
};
