import { Routes } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/project/project.component';
import { ProjectHeaderComponent } from './header/project-header.component';
import { ProjectCreateComponent } from './create/project-create.component';

export default [
    {
        path: '',
        component: ProjectComponent,
        children: [
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
            {
                path: '',
                component: ProjectHeaderComponent,
                // resolve: {
                //     combinedData: () =>
                //         forkJoin({
                //             orderTypes: inject(OrderTypeService).getorderTypes(),
                //         }),
                // },
            },
            {
                path: 'create',
                component: ProjectCreateComponent,
                // resolve: {
                //     combinedData: () =>
                //         forkJoin({
                //             orderTypes: inject(OrderTypeService).getorderTypes(),
                //         }),
                // },
            },
        ],
    },
] as Routes;
