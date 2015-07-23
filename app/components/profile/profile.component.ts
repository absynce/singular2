import {Component, View, bootstrap, NgFor, CSSClass} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'snglr-profile' // Defines the <singlr-profile></singlr-profile> tag
})
@View({
  templateUrl: 'app/components/profile/profile.template.html',
  directives: [NgFor, CSSClass]
})

// Component controller
export class SingularProfile {
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
