import {
    LoadWeather,
    LoadWeatherFutureLeft,
    LoadWeatherFutureMiddle,
    LoadWeatherFutureRight,
    LoadWeatherLeft,
    LoadWeatherRight,
    LoadWeatherRightToday
} from '../actions/weather.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {WeatherService} from '../service/weather.service';
import {DateActionTypes, LoadDay, LoadDayError} from '../actions/date.actions';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';

@Injectable()
export class WeatherEffects {

    @Effect()
    loadCartsMiddle$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDay),
            mergeMap(() => this.weatherService.getWeatherFromPast()
                .pipe(
                    map(weather => {
                        return (new LoadWeather({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsLeft$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayLeft),
            mergeMap(() => this.weatherService.getWeatherFromPustLeft()
                .pipe(
                    map(weather => {
                        return (new LoadWeatherLeft({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsRight$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayRight),
            mergeMap(() => this.weatherService.getWeatherFromPustRight()
                .pipe(
                    map(weather => {
                        return (new LoadWeatherRight({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsTodayRight$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayRightToday),
            mergeMap((action) => this.weatherService.getWeatherFromTodayRight(action.payload.urlDate)
                .pipe(
                    map(weather => {
                        return (new LoadWeatherRightToday({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsFromFutureRight$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayRightFuture),
            mergeMap((action) => this.weatherService.getWeatherFromFutureRight(action.payload.urlDate)
                .pipe(
                    map(weather => {
                        return (new LoadWeatherFutureRight({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsFromFutureMiddle$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayMiddleFuture),
            mergeMap((action) => this.weatherService.getWeatherFromFutureMiddle(action.payload.urlDate)
                .pipe(
                    map(weather => {
                        return (new LoadWeatherFutureMiddle({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );
    @Effect()
    loadCartsFromFutureLeft$ = this.actions$
        .pipe(
            ofType<LoadDay>(DateActionTypes.LoadDayLeftFuture),
            mergeMap((action) => this.weatherService.getWeatherFromFutureLeft(action.payload.urlDate)
                .pipe(
                    map(weather => {
                        return (new LoadWeatherFutureLeft({weatherData: weather}));
                    }),
                    catchError((errorMessage) => of(new LoadDayError({error: errorMessage})))
                )),
        );

    constructor(private actions$: Actions, private store: Store<AppState>, private weatherService: WeatherService) {
    }

}
