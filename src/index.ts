import {CellSink, Operational, Transaction} from 'sodiumjs';
import * as Rx from 'rxjs';
import './styles.scss';

window.onload = () => {
    const rxList = document.getElementById("rxjs-list");
    const sodiumList = document.getElementById("sodium-list");

    const log = (list, text) => {
        const li = document.createElement("li");
        li.innerHTML = text;
        list.appendChild(li);
    };

    const curry = fn => (...left) => (...right) => fn(...left, ...right);

    const rxLog = curry(log)(rxList);
    const sodiumLog = curry(log)(sodiumList);

    const ticks = Rx.Observable.interval(100).take(10).share();
    const sum = ticks.combineLatest(ticks, (oVal, hVal) => oVal + 100 * hVal);
    sum.subscribe(rxLog);

    Transaction.run(() => {
        const cOnes = new CellSink<number>(0);
        const cHundreds = cOnes.map(o => o * 100);
        const cSum = cHundreds.lift(cOnes, (h, o) => h + o);
        (function () {
            let initial = 1;
            let timer = setInterval(() => {
                initial < 10 ? cOnes.send(initial++) : clearInterval(timer);
            }, 100);
            return;
        })();
        Operational.value(cSum).listen((s) => sodiumLog(s));
    });
};
