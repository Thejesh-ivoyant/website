export interface Root {
    data: Data
  }
  export interface Data {
    product: Product
  }
  export interface Product {
    data: Data2
  }
  export interface Data2 {
    attributes: Attributes
  }
  export interface Attributes {
    phrase: string
    carousel: Carousel[]
    section2: string
    section2Bg: Section2Bg
    tabsTitle: string
    TabContents: TabContent[]
    section_4_title: string
    section_4_description: string
    pairs: Pair[]
    techTitle: string
    technologies: Technology[]
  }
  export interface Carousel {
    id: string
    title: string
    name: string
    description: string
    ornament: Ornament
  }
  export interface Ornament {
    data?: Data3
  }
  export interface Data3 {
    attributes: Attributes2
  }
  export interface Attributes2 {
    url: string
  }
  export interface Section2Bg {
    data: Data4
  }
  export interface Data4 {
    attributes: Attributes2
  }
  export interface TabContent {
    id: string
    name: string
    title: string
    description: string
    logo: Logo
    caption?: string
  }
  export interface Logo {
    data: any[]
  }
  export interface Pair {
    id: string
    text: string
    pic: Pic
  }
  export interface Pic {
    data: Data5
  }
  export interface Technology {
    text: string
    pic: Pic2
  }
  export interface Pic2 {
    data: Data6
  }
  export interface Data5 {
    attributes: Attributes2
  }