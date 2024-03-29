import { Injectable } from "@angular/core";

export class LocalStorageUtil {
  
  public static getItem<T>(key: string): T  {
    return JSON.parse(localStorage.getItem(key)!) as T;
  }

  public static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
