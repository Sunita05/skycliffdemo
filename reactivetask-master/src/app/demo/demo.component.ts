import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/demo1',10]);
}
onClickQueryParams(){
  this.router.navigate(['/demo2'],{queryParams:{id:'10'}});
}
}