import { Component, OnInit } from '@angular/core';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private metaService: MetaService) {}

  ngOnInit() {
  }

}
