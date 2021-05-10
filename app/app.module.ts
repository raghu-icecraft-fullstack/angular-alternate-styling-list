import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

import { VirtualizationService,ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, CommonModule, ListViewAllModule, TabAllModule, DropDownListAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
