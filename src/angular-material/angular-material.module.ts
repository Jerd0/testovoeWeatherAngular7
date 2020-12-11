import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    declarations: []
})
export class AngularMaterialModule {
}
