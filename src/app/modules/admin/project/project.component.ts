import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions } from 'ag-grid-enterprise';

@Component({
    selector: 'project',
    standalone: true,
    templateUrl: './project.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [AgGridAngular, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule]
})
export class ProjectComponent implements OnInit {

    private gridApi: GridApi;
    quickFilter: FormControl = new FormControl(null);

    /**
     * Constructor
     */
    constructor() {
    }

    gridOptions: GridOptions = {
        rowModelType: 'clientSide',
        pagination: true,
        paginationPageSize: 20,
        paginationPageSizeSelector: [5, 10, 20, 50, 100, 200, 500, 1000],
        animateRows: true,
        selection: {
            mode: 'multiRow',
        },
        defaultColDef: {
            flex: 1,
            minWidth: 200,
            maxWidth: 500,
            enableValue: true,
            sortable: true,
            enableCellChangeFlash: true,
            enableRowGroup: true,
            enablePivot: true,
            filter: true,
            suppressAutoSize: true,
        },
        tooltipShowDelay: 1000,
        suppressServerSideFullWidthLoadingRow: true,
        components: {
        },
        getRowId: (params) => params.data.id,
        onGridReady: (params) => {
            this.gridApi = params.api
        }
    };

    rowData = [
        { id: '1', make: "Tesla", model: "Model Y", price: 64950, electric: true, status: 'New' },
        { id: '2', make: "Ford", model: "F-Series", price: 33850, electric: false, status: 'Finished' },
        { id: '3', make: "Toyota", model: "Corolla", price: 29600, electric: false, status: 'In Progress' },
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "price", headerName: 'Number' },
        { field: "model", headerName: 'Name' },
        { field: "status", headerName: 'Status' },
        { field: "model", headerName: 'Customer' },
        { field: "make", headerName: 'Start Date' },
        { field: "electric", headerName: 'Delete' },
    ];

    ngOnInit(): void {
        this.quickFilter.valueChanges.subscribe(value => {
            this.gridApi.setGridOption('quickFilterText', value);
        })
    }
}
