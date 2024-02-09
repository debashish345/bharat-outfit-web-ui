import { Signal, signal } from "@angular/core";
import { Banner } from "../shared/models/banner";

export class BannerState {
    banners: Signal<Banner[]> = signal<Banner[]>([]);
    isLoaded: Signal<Boolean> = signal<Boolean>(false);
    lastLoaded: Signal<Date> = signal<Date>(new Date());
}