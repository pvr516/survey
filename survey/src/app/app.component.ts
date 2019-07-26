import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myobject: any = [];
  constructor ( private MyService : UserService){
    
  }
  ngOnInit(){
    this.MyService.GetUser().subscribe(User => {
      debugger
      this.myobject = User.pages;
     console.log(this.myobject);
    });
  }
}
