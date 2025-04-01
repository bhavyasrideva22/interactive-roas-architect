
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  // Format as Indian currency with thousands separators
  return new Intl.NumberFormat('en-IN').format(value);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function getRandomId(): string {
  return Math.random().toString(36).substring(2, 9);
}
