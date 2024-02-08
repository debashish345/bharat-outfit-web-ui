import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';

enum ScreenSize {
  MD, LG
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private equalOrLessThanMedium: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  private deviceSizeObserever: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.XSmall,Breakpoints.Small]);

  readonly device: Signal<Boolean> = toSignal(this.equalOrLessThanMedium, { initialValue: false });

  constructor(private breakpointObserver: BreakpointObserver) {
    this.deviceSizeObserever.subscribe(c => {
      this.equalOrLessThanMedium.next(c.matches);
    });
  }
}
