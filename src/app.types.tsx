import { type User } from 'firebase/auth'

export interface Section {
  id: number
  title: string
  imageUrl: string
}

export type UserAuth = Pick<User, 'displayName' | 'email' | 'uid'>

export interface UserData {
  email: string
  password: string
}

export interface FormData {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export interface Product {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CartElement extends Product {
  quantity: number
}

export interface ItemData {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CategoryData {
  title: string
  items: ItemData[]
}
