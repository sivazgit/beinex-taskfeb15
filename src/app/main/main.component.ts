import { Component } from '@angular/core';
import { NewPipePipe } from '../new-pipe.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isNeeded = false;
  public students: any[]=[{
    "name":"Anikha",
    "place":"London",
    "gender":'female'
  },
{
    "name":"Ryan",
    "place":"Australia",
    "gender":"male" 
},
{
  "name":"Tony",
  "place":"India",
  "gender":"male" 
}]

      constructor(private pipe:NewPipePipe){

      }

      ngOnInit(){
        for(let student of this.students){
          this.pipe.transform(student)
        }
      }

      tableview(){
        this.isNeeded = true;
      }
}
