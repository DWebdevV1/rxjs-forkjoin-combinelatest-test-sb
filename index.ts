// Import stylesheets
import './style.css';

import { of, timer, combineLatest, forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

const valArr = [
  ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'],
  ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
  ['Other 1', 'Other 2', 'Other 3', 'Other 4', 'Other 5']
];

const observableOne$ = timer(0, 1000).pipe(take(5));
const observableTwo$ = of(valArr);
const observableThree$ = timer(0, 5000).pipe(take(5));

function doForkJoin() {
  console.log('doForkJoin method called');

  forkJoin(
    observableOne$,
    observableTwo$,
    observableThree$
  ).subscribe((response: [number, any, number]) => {
    console.log(`Response 0 = ${response[0]}`);
    console.log(`Response 1 = ${response[1]}`);
    console.log(`Response 2 = ${response[2]}`);
  });
}

function doCombineLatest() {
  console.log('doCombineLatest method called');

  combineLatest(
    observableOne$,
    observableTwo$,
    observableThree$
  ).subscribe((response: [number, any, number]) => {
    console.log(`Response 0 = ${response[0]}`);
    console.log(`Response 1 = ${response[1]}`);
    console.log(`Response 2 = ${response[2]}`);
  });
}

/**
 * Method calls
 */
// doForkJoin();
doCombineLatest();