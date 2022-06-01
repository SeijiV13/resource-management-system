import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './layout/page-title/page-title.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { laptop, plusCircle, plus, trash, penFill, envelopePaperFill} from 'ngx-bootstrap-icons';
// Select some icons (use an object, not an array)
const icons = {
  laptop,
  plusCircle,
  plus,
  trash,
  penFill,
  envelopePaperFill
};
@NgModule({
  declarations: [
    FooterComponent, 
    NavbarComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PageTitleComponent,
    NgxBootstrapIconsModule
  ]
})
export class SharedModule { }
