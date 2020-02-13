import { Component, ViewChild, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-skiplinks',
  templateUrl: './skiplinks.component.html',
  styleUrls: ['./skiplinks.component.scss']
})
export class SkiplinksComponent implements OnInit {

  // skipLinkPath: string;
  mainElement: any;
  filterElement: any;
  searchElement: any;

  constructor(private renderer: Renderer2) { }

  focusMain() {
    this.mainElement = this.renderer.selectRootElement('#beers-cards-list');
    setTimeout(() => this.mainElement.focus(), 0);
  }

  focusFilter() {
    this.filterElement = this.renderer.selectRootElement('#filter-skip-link-anchor');
    setTimeout(() => this.filterElement.focus(), 0);
  }

  focusSearch() {
    this.searchElement = this.renderer.selectRootElement('#search-skip-link-anchor');
    setTimeout(() => this.searchElement.focus(), 0);
  }

  ngOnInit(): void {

  }

}
