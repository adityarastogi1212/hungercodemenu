import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../WebService';

@Component({
  selector: 'app-menu-image',
  templateUrl: './menu-image.component.html',
  styleUrls: ['./menu-image.component.css']
})
export class MenuImageComponent implements OnInit {
  profileData: any;

  constructor(private route: ActivatedRoute, private api: WebService) { }

  ngOnInit(): void {
    let username = this.route.snapshot.params.username;
    console.log(username);
    this.api.retrieveUserProfile(username).subscribe(response=>this.profileData=response);
    console.log(this.profileData);
  }

}
