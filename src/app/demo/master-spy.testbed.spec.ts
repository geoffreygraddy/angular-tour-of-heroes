// import { ValueService } from "./value.service";
// import { TestBed } from '@angular/core/testing';
// import { MasterService } from './master.service';

// let masterService: MasterService;
// let valueServiceSpy: jasmine.SpyObj<ValueService>;

// beforeEach(() => {
//   const spy = jasmine.createSpyObj('ValueService', ['getValue']);

//   TestBed.configureTestingModule({
//     // Provide both the service-to-test and its (spy) dependency
//     providers: [
//       MasterService,
//       { provide: ValueService, useValue: spy }
//     ]
//   });
//   // Inject both the service-to-test and its (spy) dependency
//   masterService = TestBed.get(MasterService);
//   valueServiceSpy = TestBed.get(ValueService);
// });

// it('#getValue should return stubbed value from a spy', () => {
//   const stubValue = 'stub value';
//   valueServiceSpy.getValue.and.returnValue(stubValue);

//   expect(masterService.getValue())
//     .toBe(stubValue, 'service returned stub value');
//   expect(valueServiceSpy.getValue.calls.count())
//     .toBe(1, 'spy method was called once');
//   expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
//     .toBe(stubValue);
// });