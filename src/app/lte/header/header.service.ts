import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {

  public toggleNavigationClicked$: EventEmitter<boolean>;

  constructor() { }

  toggleNavigationClicked() {
    this.toggleNavigationClicked$.emit(true);
  }  

}
