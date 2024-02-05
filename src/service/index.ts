import type { IDelveryCard } from '../DTO';

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function fetchDelivery(city: string) {
  const request = await fetch(`${baseUrl}/check?search=${city}`);
  const response: IDelveryCard[] = await request.json();
  return response;
}
