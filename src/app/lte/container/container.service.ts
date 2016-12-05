import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ContainerService {

  public wrapperClicked$: EventEmitter<boolean>;
  public contentWrapperClicked$: EventEmitter<boolean>;

  constructor() { }

  wrapperClicked() {
    this.contentWrapperClicked$.emit(true);
  }  

  contentWrapperClicked() {
    this.contentWrapperClicked$.emit(true);
  }  
}
