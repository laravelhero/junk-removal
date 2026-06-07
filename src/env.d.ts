/// <reference path="../.astro/types.d.ts" />

declare module 'alpinejs';
declare module '@alpinejs/collapse';

interface Window {
  // Alpine attaches itself globally; typed loosely since the package ships no types.
  Alpine: any;
}
