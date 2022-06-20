import { ModuleWithProviders, NgModule } from '@angular/core';
import { COOKIE_OPTIONS, COOKIE_WRITER, CookieModule, CookieOptions, CookieOptionsProvider } from 'ngx-cookie';

import { CookieBackendWriterService } from './cookie-backend-writer.service';


@NgModule({
  imports: [CookieModule],
  providers: [CookieOptionsProvider]
})
export class CookieBackendModule {

  /**
   * Use this method in your root module to provide the CookieService
   */
  static withOptions(options: CookieOptions = {}): ModuleWithProviders<CookieModule> {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: COOKIE_WRITER, useClass: CookieBackendWriterService}
      ]
    };
  }

  /**
   * @deprecated use `CookieBackendModule.withOptions()` instead
   * Use this method in your root module to provide the CookieService
   */
  static forRoot(options: CookieOptions = {}): ModuleWithProviders<CookieModule> {
    return this.withOptions(options);
  }

  /**
   * @deprecated use `CookieBackendModule.withOptions()` instead
   * Use this method in your other (non root) modules to import the directive/pipe
   */
  static forChild(options: CookieOptions = {}): ModuleWithProviders<CookieModule> {
    return this.withOptions(options);
  }

}
