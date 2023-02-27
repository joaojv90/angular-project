import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { JsonPipe, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { InventarioComponent } from './inventario/inventario.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';
import { VentasComponent } from './ventas/ventas.component';
import { UsComponent } from './us/us.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ModalComponent,
    VentasComponent,
    UsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
