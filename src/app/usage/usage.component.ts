import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {

  @Input() metric;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
