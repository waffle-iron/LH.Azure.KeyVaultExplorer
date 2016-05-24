import {Dummy} from "./dummy"

export class AnotherCl {
    public getAnother() : void {
        alert("ahoj");
        var a = new Dummy();
        a.getSomething();
    }
}

var a = new AnotherCl();
a.getAnother();