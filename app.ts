/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/rx/rx.d.ts"/>

import {Component, View, bootstrap, NgFor, CSSClass} from 'angular2/angular2';

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
    this.title = 'Developer profile';
  }
}

// Annotation section
@Component({
  selector: 'snglr-profile' // Defines the <singlr-profile></singlr-profile> tag
})
@View({
  template:
        `<div class="profile">
            <h2>{{ firstName }}</h2>
            <h3>{{ lastName }}</h3>
            <dl class="profile-details">
              <dt><label>Favorite language</label></dt>
              <dd>{{ favoriteLanguage }}</dd>
              <dt><label>Favorite framework</label></dt>
              <dd>{{ favoriteFramework }}</dd>
              <dt><label>Coding since</label></dt>
              <dd>{{ codingSince | date:'yyyy' }}</dd>
              <dt>Languages</dt>
              <dd>
                <ul class="languages">
                  <li template="ng-for #lang of languages; #i = index" [class.odd-row]="i % 2">{{ lang }}</li>
                </ul>
              </dd>
            </dl>
          </div>`,
  directives: [NgFor, CSSClass]
})

// Component controller
class SingularProfile {
  firstName: string;
  lastName: string;
  favoriteLanguage: string;
  favoriteFramework: string;
  codingSince: Date;
  languages: [string];

  constructor() {
    this.firstName         = 'Michael';
    this.lastName          = 'Owen';
    this.favoriteLanguage  = 'C#';
    this.favoriteFramework = 'Angular 1.x';
    this.codingSince       = new Date(2011, 08, 17);
    this.languages         = [
                                'C#',
                                'JavaScript',
                                'SQL',
                                'Engrish'
                              ];

  }
}

bootstrap(SingularHeader);
bootstrap(SingularProfile);
