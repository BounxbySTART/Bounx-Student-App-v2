import { Component } from '@angular/core';

export interface Tab {
  title: string;
  name: string;
  component?: any;
  inputs?: any;
}
