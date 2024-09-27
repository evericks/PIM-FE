import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'project-create',
    templateUrl: './project-create.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatDatepickerModule,
        MatButtonModule, RouterModule
    ]
})
export class ProjectCreateComponent implements OnInit {

    createForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initCreateForm();
    }

    initCreateForm() {
        this.createForm = this._formBuilder.group({
            number: [null, [Validators.required]],
            name: [null, [Validators.required]],
            customer: [null, [Validators.required]],
            group: [null, [Validators.required]],
            member: [],
            status: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            endDate: []
        });
    }
}
