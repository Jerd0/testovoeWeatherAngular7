import {AppComponent} from './app.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {metaReducers, reducers} from './reducers';
import {environment} from '../environments/environment';
import {WeatherEffects} from './weather/effects/weather.effects';
import {WeatherDayComponent} from './cards/weather/weather-day.component';
import {AppRoutingModule} from './app-routing.module';
import {WeatherComponent} from './weather/weather.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        WeatherDayComponent,
        WeatherComponent,
    ],
    entryComponents: [
        WeatherDayComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([WeatherEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
