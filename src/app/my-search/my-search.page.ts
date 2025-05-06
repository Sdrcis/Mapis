import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.page.html',
  styleUrls: ['./my-search.page.scss'],
})
export class MySearchPage implements OnInit {
  data: any;
  junk: any;
  pages :any = [];
  filterTerm: string;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.getUrls().subscribe(res => 
      {console.log(res);
      this.pages = res;
            }      );
  }
  dismiss(){
    this.dismiss();
  }

  getUrls(){
    return this.http
    .get('assets/my-search.json')
    .pipe(
      map((res:any)=>{
        return res.data;

      })
    )
  }

}
