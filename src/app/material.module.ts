import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule

} from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule

    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule
    ]

})
export class MaterialModule{}
