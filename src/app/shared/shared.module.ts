import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './layout/page-title/page-title.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { laptop, plusCircle, plus, trash, penFill, envelopePaperFill, doorOpenFill} from 'ngx-bootstrap-icons';
import { LoaderComponent } from './layout/loader/loader.component';
// Select some icons (use an object, not an array)
const icons = {
  laptop,
  plusCircle,
  plus,
  trash,
  penFill,
  envelopePaperFill,
  doorOpenFill
};
@NgModule({
  declarations: [
    FooterComponent, 
    NavbarComponent,
    PageTitleComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PageTitleComponent,
    NgxBootstrapIconsModule,
    LoaderComponent
  ]
})
export class SharedModule { }
