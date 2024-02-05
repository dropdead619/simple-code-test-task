export interface IDelveryCard {
  city: string
  type: 'pickup' | 'courier' | 'post'
  available: boolean
  price: number
}
