declare module 'topbar'
declare module '*.gql'

declare type Maybe<T> = T | null
declare type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
declare type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
declare type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}
