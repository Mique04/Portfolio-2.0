import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public showLoader: boolean = true;

  constructor() { }

  ngOnInit() {
    // Fakes the loading setting a timeout
    setTimeout(() => {
      $('body').addClass('loaded');
    }, 3500);
  }
}
