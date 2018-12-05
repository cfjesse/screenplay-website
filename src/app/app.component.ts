import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ElementScrollPercentage } from './services/element-scroll-percent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('top') top: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('author') author: ElementRef;
  @ViewChild('contact') contact: ElementRef;
  width = 0;

  constructor(private elementScrollService: ElementScrollPercentage) { }

  ngOnInit() {

    this.elementScrollService.addPage(this.top, 'top');
    this.elementScrollService.addPage(this.about, 'about');
    this.elementScrollService.addPage(this.author, 'author');
    this.elementScrollService.addPage(this.contact, 'contact');

    this.elementScrollService.getScrollAsStream().subscribe(stream => {
      this.width = stream;
    });
  }

}
