export interface HomePageSingleType {
    data: Data
  }
  
  export interface Data {
    homepage: Homepage
  }
  
  export interface Homepage {
    data: Data2
  }
  
  export interface Data2 {
    attributes: Attributes
  }
  
  export interface Attributes {
    heroTitle: string
    heroText: string
    heroDescription: string
    heroBg: HeroBg
    AboutUs: string
    AboutUsTitle: string
    AboutUsBtnText: string
    servicesTitle: string
    clientsTitle: string
    ClientCount: string
    ExperienceCount: string
    ProjectsCount: string
    InHouseExpertsCount: string
    serviceDescription: string
    services: Service[]
    industriesTitle: string
    IndustriesDescription: string
    industriesTabs: IndustriesTab[]
    clients: Clients
    partners: Partners
    technologies: Technology[]
    techTitle: string
    testimonalsTitle: string
    testimonals: Testimonal[]
    whychooseus: string
    whychooseusDesc: string
    pairs: Pair[]
    faq: Faq[]
  }
  
  export interface HeroBg {
    data: Data3
  }
  
  export interface Data3 {
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    url: string
  }
  
  export interface Service {
    id: string
    title: string
    description: string
    bgImage: BgImage
    link?: string
  }
  
  export interface BgImage {
    data: Data4
  }
  
  export interface Data4 {
    attributes: Attributes2
  }
  
  
  export interface IndustriesTab {
    id: string
    title: string
    description: string
    image: Image
    link: any
  }
  
  export interface Image {
    data: Data5
  }
  
  export interface Data5 {
    attributes: Attributes2
  }
  
  
  export interface Clients {
    data: Daum[]
  }
  
  export interface Daum {
    attributes: Attributes2
  }
  
  export interface Partners {
    data: Daum2[]
  }
  
  export interface Daum2 {
    attributes: Attributes2
  }
  
  export interface Technology {
    text: string
    pic: Pic
  }
  
  export interface Pic {
    data: Data6
  }
  
  export interface Data6 {
    attributes: Attributes2
  }
  
  export interface Testimonal {
    category: string
    title: string
    designation: string
    description: string
  }
  
  export interface Pair {
    text: string
    pic: Pic2
    description?: string
  }
  
  export interface Pic2 {
    data: Data7
  }
  
  export interface Data7 {
    attributes: Attributes2
  }
  
  export interface Faq {
    question: string
    answer: string
  }
  