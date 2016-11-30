import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'is-charging',
  templateUrl: './is-charging.component.html',
  styleUrls: ['./is-charging.component.css']
})
export class IsChargingComponent implements OnInit {
  @Input('charging') charging: boolean;

  constructor() { }

  ngOnInit() {
  }

}
