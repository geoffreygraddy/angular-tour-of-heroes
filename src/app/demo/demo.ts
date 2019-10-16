import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ValueService {
    getValue() { 
        return "real value"; 
    }

    getObservableValue() {
        return of("observable value");
    }

    getPromiseValue() {
        return Promise.resolve("promise value");
    }
}