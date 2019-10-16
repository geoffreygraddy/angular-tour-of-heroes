import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export class FakeValueService {
    getValue() { 
        return "faked service value"; 
    }

    getObservableValue() {
        return of("observable value");
    }

    getPromiseValue() {
        return Promise.resolve("promise value");
    }
}