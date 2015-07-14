/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/rx/rx.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'snglr-header' // Defines the <singlr-header></singlr-header> tag
})
@View({
  template:
        `<header>
          <h1>
            <span class="title">SingulaR 2</span>
            <span class="divider">|</span>
            <span class="subtitle">{{ title }}</span>
          </h1>
        </header>`
})

// Component controller
class SingularHeader{
  title: string;

  constructor() {
    this.title = 'Index';
  }
}

bootstrap(SingularHeader);
