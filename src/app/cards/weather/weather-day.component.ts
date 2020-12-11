import {CurrentConditions} from '../../models/conditions/current-conditions';
import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {dateInUrl} from '../../weather/weather.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-day-weather',
    templateUrl: './weather-day.component.html',
    styleUrls: ['./weather-day.component.css']
})
export class WeatherDayComponent implements OnInit, DoCheck {
    @Input() currentDay;
    @Input() value: CurrentConditions;
    chosen = false;
    isFarengate = false;
    temp: number;
    tempColor = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.changeColor();
    }

    checkToggle() {
        if (new Date(this.value.day * 1000).getDate() === dateInUrl.getDate()) {
            this.chosen = !this.chosen;
        } else {
            this.chosen = false;
        }
    }

    ngDoCheck() {
        this.changeColor();
        this.checkToggle();
    }

    toggle(): void {
        const route = new Date(this.value.day * 1000);
        this.router.navigateByUrl(`${route.getFullYear()}/${(route.getMonth() + 1)}/${(route.getDate())}`);
    }

    changeTemp() {
        this.isFarengate = !this.isFarengate;
        this.changeColor();
    }

    changeColor() {
        this.isFarengate ? this.temp = (this.value.temp - 273.15) * 9 / 5 + 32
            : this.temp = this.value.temp - 273.15;
        if (this.temp > 0) {
            this.tempColor = 'green';
        }
        if (this.temp === 0) {
            this.tempColor = 'gray';
        }
        if (this.temp < 0) {
            this.tempColor = 'red';
        }
    }
}


