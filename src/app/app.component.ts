import { Component } from '@angular/core';
import { MetaService } from 'ng2-meta';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private metaService: MetaService) {}
  title = 'app';
}
