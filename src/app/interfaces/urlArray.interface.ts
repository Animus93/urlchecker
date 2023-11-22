import { BehaviorSubject } from "rxjs";

export interface IUrlArr {
    url: string;
    status: BehaviorSubject<number>;
}