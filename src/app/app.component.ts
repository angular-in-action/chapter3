import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metrics = {
    cpu: { available: 10, used: 4.2 },
    memory: { available: 50, used: 3.23 },
    disk: { available: 50, used: 11.32 }
  }
  nodes = [
    { name: 'master', age: 9, status: 'Healthy' },
    { name: 'agent1', age: 3, status: 'Healthy' },
    { name: 'agent2', age: 4, status: 'Healthy' }
  ]
}
