import {Component} from '@angular/core';

@Component({
    selector:'emp',
    templateUrl:'app.employee.html'
})
export class EmployeeComponent{
    employeeData:any[]=
        [
            {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
            {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
            {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
        ];

    deleteData(){
        for(const i in this.employeeData){
            this.employeeData.splice(this.employeeData[i],1);
        }
    }
    updateData(){
        
    }
    
}
