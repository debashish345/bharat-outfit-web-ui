import { Signal, signal } from "@angular/core";
import { Category } from "../shared/models/category";
import { Product } from "../shared/models/product";

export class ProductState {
    products: Signal<Product[]> = signal<Product[]>([]);
    isLoaded: Signal<Boolean> = signal<Boolean>(false);
    lastLoaded: Signal<Date> = signal<Date>(new Date());
}