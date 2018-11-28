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
  @ViewChild('signup') signup: ElementRef;

  constructor(private elementScrollService: ElementScrollPercentage) { }

  ngOnInit() {

    this.elementScrollService.addPage(this.top, 'top');
    this.elementScrollService.addPage(this.about, 'about');
    this.elementScrollService.addPage(this.author, 'author');
    this.elementScrollService.addPage(this.signup, 'signup');

    console.log(this.elementScrollService.pages);

    this.elementScrollService.getScrollAsStream().subscribe(stream => {
      console.log(stream);
    });
  }

}
