import { ValueService } from "./value.service";
import { TestBed } from '@angular/core/testing';

let service: ValueService;

beforeEach(() => {
    TestBed.configureTestingModule({providers: [ValueService]});
});

it('should use ValueService', () => {
    service = TestBed.get(ValueService); // this line could also be added in the beforeEach()
    expect(service.getValue()).toBe('real value');
});