import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LteComponent } from './lte.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMiniComponent } from './sidebar-mini/sidebar-mini.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SmallBoxComponent } from './small-box/small-box.component';
import { BoxComponent } from './box/box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ButtonComponent } from './button/button.component';
import { CalloutComponent } from './callout/callout.component';
import { AlertComponent } from './alert/alert.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { LabelsComponent } from './labels/labels.component';
import { DirectChatComponent } from './direct-chat/direct-chat.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LteComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarMiniComponent,
    ControlSidebarComponent,
    DropdownComponent,
    FormComponent,
    ProgressBarComponent,
    SmallBoxComponent,
    BoxComponent,
    InfoBoxComponent,
    TimelineComponent,
    ButtonComponent,
    CalloutComponent,
    AlertComponent,
    NavComponent,
    ProductComponent,
    TableComponent,
    LabelsComponent,
    DirectChatComponent,
    UsersListComponent,
    CarouselComponent,
    ModalComponent,
    SocialWidgetComponent
  ],
  exports: [
    LteComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarMiniComponent,
    ControlSidebarComponent,
    DropdownComponent,
    FormComponent,
    ProgressBarComponent,
    SmallBoxComponent,
    BoxComponent,
    InfoBoxComponent,
    TimelineComponent,
    ButtonComponent,
    CalloutComponent,
    AlertComponent,
    NavComponent,
    ProductComponent,
    TableComponent,
    LabelsComponent,
    DirectChatComponent,
    UsersListComponent,
    CarouselComponent,
    ModalComponent,
    SocialWidgetComponent
  ],
})
export class LteModule { }
