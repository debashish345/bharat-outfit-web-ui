import { Signal, WritableSignal, signal } from "@angular/core";
import { Filter } from "../shared/models/filter";

export class FilterState {
    filter: Signal<Filter | undefined> = signal<Filter | undefined>(undefined);
}