import { writable } from 'svelte/store';

export const theme = writable<"dark" | "light">("light"); // default theme
