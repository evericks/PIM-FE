import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'project',
    standalone: true,
    templateUrl: './project.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterModule]
})
export class ProjectComponent implements OnInit {
    /**
     * Constructor
     */
    constructor() {
    }

    ngOnInit(): void {
    }
}
