import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  @Input() nodes;

  constructor() { }

  ngOnInit() {
  }

}
