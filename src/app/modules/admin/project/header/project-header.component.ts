import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions } from 'ag-grid-enterprise';
import { globalGridOptions } from 'app/modules/ag-grid/configuration/global-config';

@Component({
    selector: 'project-header',
    standalone: true,
    templateUrl: './project-header.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [AgGridAngular, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule,
        MatIconModule, MatButtonModule, RouterModule]
})
export class ProjectHeaderComponent implements OnInit {

    private gridApi: GridApi;
    quickFilter: FormControl = new FormControl(null);

    /**
     * Constructor
     */
    constructor() {
    }

    gridOptions: GridOptions = {
        ...globalGridOptions,
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
        {
            headerName: 'Actions',
            field: 'actions',
            cellRenderer: 'actionCellRenderer',
            sortable: false,
            filter: false,
            cellClass: () => {
                return 'flex justify-center item-center';
            },
            cellRendererParams: {
                onRemove: this.onRemoveButtonClicked.bind(this),
                onUpdate: this.onUpdateButtonClicked.bind(this),
            },
        },
    ];

    ngOnInit(): void {
        this.quickFilter.valueChanges.subscribe(value => {
            this.gridApi.setGridOption('quickFilterText', value);
        })
    }

    onAddButtonClicked() {

    }

    onRemoveButtonClicked() {

    }

    onUpdateButtonClicked() {

    }
}
