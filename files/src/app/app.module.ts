import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EmployeeComponent} from './app.employeecomponent';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule, FormsModule
        
    ],
    declarations: [
        AppComponent, EmployeeComponent 
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }