export interface NavType {
    data: Data
  }
  
  export interface Data {
    navbar: Navbar
  }
  
  export interface Navbar {
    data: Data2
  }
  
  export interface Data2 {
    id: string
    attributes: Attributes
  }
  
  export interface Attributes {
    iv_logo: IvLogo
    services: Service[]
    industries: Industry[]
    products: Product[]
    resources: Resource[]
    company: Company[]
  }
  
  export interface IvLogo {
    data: Data3
  }
  
  export interface Data3 {
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    url: string
  }
  
  export interface Service {
    __typename: string
    id: string
    name?: string
    link: string
    icon?: Icon
    title?: string
    bgImage?: BgImage
    description?: string
  }
  
  export interface Icon {
    data: any
  }
  
  export interface BgImage {
    data: Data4
  }
  
  export interface Data4 {
    attributes: Attributes2
  }
  
  export interface Industry {
    __typename: string
    id: string
    name?: string
    link: string
    icon?: Icon2
    title?: string
    bgImage?: BgImage2
    description?: string
  }
  
  export interface Icon2 {
    data: any
  }
  
  export interface BgImage2 {
    data: Data5
  }
  
  export interface Data5 {
    attributes: Attributes2
  }
  
  export interface Product {
    __typename: string
    id: string
    name?: string
    link: string
    icon?: Icon3
    title?: string
    bgImage?: BgImage3
    description?: string
  }
  
  export interface Icon3 {
    data: any
  }
  
  export interface BgImage3 {
    data: Data6
  }
  
  export interface Data6 {
    attributes: Attributes2
  }
  
  export interface Resource {
    __typename: string
    id: string
    name?: string
    link?: string
    attachment?: Attachment
    icon?: Icon4
    title?: string
    bgImage?: BgImage4
    description?: string
  }
  
  export interface Attachment {
    data?: Data7
  }
  
  export interface Data7 {
    attributes: Attributes2
  }
  
  
  export interface Icon4 {
    data: any
  }
  
  export interface BgImage4 {
    data: Data8
  }
  
  export interface Data8 {
    attributes: Attributes2
  }
  
  
  export interface Company {
    __typename: string
    id: string
    name?: string
    link: string
    icon?: Icon5
    title?: string
    bgImage?: BgImage5
    description?: string
  }
  
  export interface Icon5 {
    data: any
  }
  
  export interface BgImage5 {
    data: Data9
  }
  
  export interface Data9 {
    attributes: Attributes2
  }
  
  