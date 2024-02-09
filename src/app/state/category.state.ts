import { Signal, signal } from "@angular/core";
import { Category } from "../shared/models/category";

export class CategoryState {
    categories: Signal<Category[]> = signal<Category[]>([]);
    isLoaded: Signal<Boolean> = signal<Boolean>(false);
    lastLoaded: Signal<Date> = signal<Date>(new Date());
}