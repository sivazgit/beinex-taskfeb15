import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})

@Injectable({
  providedIn:'root'
})
export class NewPipePipe implements PipeTransform {


  transform(student:any){
   if(student.gender =='male'){
   student.name = 'Mr. '+student.name;
   }
   else if(student.gender == 'female'){
    student.name = 'Ms. '+student.name;
   }
   
    return student
   
  }


}
