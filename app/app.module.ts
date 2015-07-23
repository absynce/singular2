/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/rx/rx.d.ts"/>

import {bootstrap} from 'angular2/angular2';
import {SingularHeader} from './shared/header/header.component';
import {SingularProfile} from './components/profile/profile.component';

bootstrap(SingularHeader);
bootstrap(SingularProfile);

export function main() {
  // The bootstrap stuff should go here...but doesn't work. :-/
}
