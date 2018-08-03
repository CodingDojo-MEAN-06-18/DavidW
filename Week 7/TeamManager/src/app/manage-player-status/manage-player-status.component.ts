import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'


@Component({
  selector: 'app-manage-player-status',
  templateUrl: './manage-player-status.component.html',
  styleUrls: ['./manage-player-status.component.css']
})
export class ManagePlayerStatusComponent implements OnInit {
  public href: string = "";
  gamenum: number = 1;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // console.log(this.gamenum)
    this.href = this.router.url;
    // console.log('url', this.router.url);
    this.gamenum = +(this.router.url[13])
    // console.log(this.gamenum)
    }

}