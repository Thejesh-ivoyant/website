export interface CategoriesType {
    data: Data
  }
  export interface Data {
    categories: Categories
  }
  export interface Categories {
    data: Daum[]
  }
  export interface Daum {
    attributes: Attributes
  }
  export interface Attributes {
    name: string
  }
