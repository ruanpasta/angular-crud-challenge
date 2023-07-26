import { NgModule } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { ButtonComponent } from '../components/button/button.component';
import { TileComponent } from '../components/tile/tile.component';

@NgModule({
  imports: [PageHeaderComponent, ButtonComponent, TileComponent],
  exports: [PageHeaderComponent, ButtonComponent, TileComponent],
})
export class SharedModule {}
