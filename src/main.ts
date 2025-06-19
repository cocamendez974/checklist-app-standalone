import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { chevronUpOutline, chevronDownOutline, caretUpOutline, caretDownOutline,   barChartOutline,barChartSharp,clipboardOutline, clipboardSharp,checkboxOutline, checkboxSharp,checkmarkDoneOutline,checkmarkDoneSharp, bookmarkOutline, bookmarkSharp, playOutline, ellipseOutline, warningOutline } from 'ionicons/icons';

addIcons({
  'chevron-up-outline': chevronUpOutline,
  'chevron-down-outline': chevronDownOutline,
  'caret-up-outline': caretUpOutline,
  'caret-down-outline': caretDownOutline, 'bar-chart-outline': barChartOutline,
  'bar-chart-sharp': barChartSharp,
  'clipboard-outline': clipboardOutline,
  'clipboard-sharp': clipboardSharp,
  'checkbox-outline': checkboxOutline,
  'checkbox-sharp': checkboxSharp,
  'checkmark-done-outline': checkmarkDoneOutline,
  'checkmark-done-sharp': checkmarkDoneSharp,
  'bookmark-outline': bookmarkOutline,
  'bookmark-sharp': bookmarkSharp,
  'play-outline' : playOutline,
  'ellipse-outline' : ellipseOutline,
  'warning-outline' : warningOutline
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});




