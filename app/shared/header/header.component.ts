import {Component, View, bootstrap, NgFor, CSSClass} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'snglr-header' // Defines the <singlr-header></singlr-header> tag
})
@View({
  templateUrl: 'app/shared/header/header.template.html'
})

// Component controller
export class SingularHeader{
  title: string;

  constructor() {
    this.title = 'Developer profile';
  }
}
