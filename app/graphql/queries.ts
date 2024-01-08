export const homeQuery : string = `
query{
  homepage{
    data{
      attributes{
        heroTitle
        heroText
        heroDescription
        heroBg{
          data{
            attributes{
              url
            }
          }
        }
        AboutUs
        AboutUsTitle
        AboutUsBtnText
				servicesTitle
        clientsTitle
        ClientCount
        ExperienceCount
        ProjectsCount
        InHouseExpertsCount
        serviceDescription
        services{
          id
          title
          description
        	bgImage{
            data{
              attributes{
                url
              }
            }
          }
          link
        }
        industriesTitle
        IndustriesDescription
        industriesTabs{
          id
          title
          description
          image{
            data{
              attributes{
                url
              }
            }
          }
          link
        }
        clients{
          data{
            attributes{
              url
            }
          }
        }
        partners{
          data{
            attributes{url}
          }
        }
        technologies{
          text
          pic{
            data{
              attributes{
                url
              }
            }
          }
        }
        techTitle
        testimonalsTitle
        testimonals{
          category
          title
          designation
          description
        }
        whychooseus
        whychooseusDesc
        pairs{
          text
          pic{
            data{attributes{url}}
          }
          description
        }
        faq{
          question
          answer
        }
      }
    }
  }
}
`

export const navQuery = `
query {
    navbar {
      
      data {
        id
        attributes {
          iv_logo{
            data{
              attributes{
                url
              }
            }
          }
          services {
            __typename
            ... on ComponentCardCard {
              id
              title
              bgImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              description
              link
            }
            ... on ComponentNavItemNavItem {
              id
              name
              link
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            # Add more inline fragments for other possible types if needed
          }
         industries {
            __typename
            ... on ComponentCardCard {
              id
              title
              bgImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              description
              link
            }
            ... on ComponentNavItemNavItem {
              id
              name
              link
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            # Add more inline fragments for other possible types if needed
          }
          products{
            __typename
            ... on ComponentCardCard {
              id
              title
              bgImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              description
              link
            }
            ... on ComponentNavItemNavItem {
              id
              name
              link
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            # Add more inline fragments for other possible types if needed
          }
          resources{
            __typename
            ... on ComponentCardCard {
              id
              title
              bgImage{
                data{
                  attributes{
                    url
                    
                  }
                }
              }
              description
              link
            }
            ... on ComponentNavItemNavItem {
              id
              name
              link
              attachment{
                data{
                  attributes{
                    url
                  }
                }
              }
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            # Add more inline fragments for other possible types if needed
          }
          company{
            __typename
            ... on ComponentCardCard {
              id
              title
              bgImage{
                data{
                  attributes{
                    url
                    
                  }
                }
              }
              description
              link
            }
            ... on ComponentNavItemNavItem {
              id
              name
              link
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            # Add more inline fragments for other possible types if needed
          }
        }
      }
    }
  }  
`;
export const whitepaperQuery = `query {
  whitePapers(
    sort: "date:desc",
    pagination: {limit:6}
  ){
   data{
     id,
     attributes{
       title
       description1
       maxReadTime
       date
       bannerImage{
         data{
           attributes{
             url
           }
         }
       }
       author{
         data{
           attributes{
           name
           avatar{
             data{
               attributes{
                 url
               }
             }
           }
           }
         }
       }
     }
   }
 }
}
`;

export const blogQuery = `query{
  blogs(
  sort: "date:desc",
  pagination: {limit:3}
){
    data{
      id,
      attributes{
        title
        description1
        maxReadTime
        date
        bannerImage{
          data{
            attributes{
              url
            }
          }
        }
        topic_tags{
          data{
						attributes{
  						name	
              }
          }
        }
        category{
          data
          {
            attributes{
              name
            }
          }
        }
        author{
          data{
            attributes{
            name
            avatar{
              data{
                attributes{
                  url
                }
              }
            }
            }
          }
        }
      }
    }
  }
}`;

export const getAuthorQuery = (id:any) => {
  console.warn("author id is ", id);
  return `
    query GetAuthorById {
      author(id: ${id}) {
        data {
          attributes {
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
            socialMediaLinks {
              ... on ComponentSocialMediaLinksSocialMediaLinks {
                link
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};



export const getBlogAuthorIDQuery = (id:any) => {
  console.warn("blog id is ", id);
  return `
  query GetBlogById{
    blog(id: ${id}){
    data{
      attributes{
        title
        author{
          data{
            id
            attributes{
              publishedAt
            }
          }
        }
      }
    }
  }
  }
  `;
}; 
export const getWhitepaperBasedonLimit = (limit: number) => {
  return `
    query {
      whitePapers (
        sort: "date:desc",
        pagination: { limit: ${limit} }
      ) {
        data {
          id,
          attributes {
            title,
            description1,
            date,
            maxReadTime,
            bannerImage {
              data {
                attributes {
                  name,
                  url
                }
              }
            },
            author {
              data {
                attributes {
                  name,
                  avatar {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};

export const getBlogsBasedonLimit = (limit: number) => {
  return `
  query{
    blogs(
    sort: "date:desc",
    pagination: { limit: ${limit} }
  ){
      data{
        id,
        attributes{
          title
          description1
          maxReadTime
          date
          bannerImage{
            data{
              attributes{
                url
              }
            }
          }
          topic_tags{
            data{
              attributes{
                name	
                }
            }
          }
          category{
            data
            {
              attributes{
                name
              }
            }
          }
          author{
            data{
              attributes{
              name
              avatar{
                data{
                  attributes{
                    url
                  }
                }
              }
              }
            }
          }
        }
      }
    }
  }
  `;
};

export const getPaperAuthorIDQuery = (id:any) => {
  console.warn("paper id is ", id);
  return `
  query GetWhitePaperById{
    whitePaper(id: ${id}){
    data{
      attributes{
        title
        author{
          data{
            id
            attributes{
              publishedAt
            }
          }
        }
      }
    }
  }
  }
  `;
}; 
export const topBlogQuery = `
query {
  blogs(
    sort: "date:desc",
    pagination: {limit:3}
  ) {
    data {
      id,
      attributes {
        title
        maxReadTime
        date
        bannerImage {
          data {
            attributes {
              url
            }
          }
        }
        topic_tags{
          data{
						attributes{
  						name	
              }
          }
        }
        category{
          data
          {
            attributes{
              name
            }
          }
        }
        author {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

export const careersQuery = `
query{
  career{
     data{
      attributes{
        heroDescription
        heroTitle
        heroImage{
          data{
            attributes{
            	url
          	}
          }
        }
        s2_title
        s2_description
        s3_title
        s3_description
        s3_email
        job_descriptions(pagination: { limit: 5 }){
          data{
            id
            attributes{
              job_id
              Title
             
              department{
                data{
                  attributes{
                   DepartmentName 
                  }
                }
              }
              experience{
                data{
                  attributes{
                    experienceRange 
                  }
                }
              }
              
              location{
                data{
                  attributes{
                  location
                }
                }
              }
              job_role{
                data{
                  attributes{
                    role
                  }
                }
              }


            }
          }
        }
      } 
    }
  }
}
`;
export const getJDBasedonLimit = (limit: number) => {
  return `
  query{
    career{
       data{
        attributes{
          job_descriptions(pagination: { limit: ${limit} }){
            data{
              id
              attributes{
                job_id
                Title
              experience{
                    data{
                      attributes{
                        experienceRange
                      }
                    }
                  }
                
                department{
                  data{
                    attributes{
                     DepartmentName 
                    }
                  }
                }
                location{
                  data{
                    attributes{
                    location
                  }
                  }
                }
                job_role{
                  data{
                    attributes{
                      role
                    }
                  }
                }
              }
            }
          }
        } 
      }
    }
  }
  `;
}

export const productsQuery = `
query{
  product{
    data{
      attributes{
        phrase
        carousel{
          id
          title
          description
          ornament{
            data{
              attributes{
                url
              }
            }
          }
        }
        section2
        section2Bg{
          data{
            attributes{
              url
            }
          }
        }
        tabsTitle
        TabContents{
          id
          name
          title
          description
          logo{
            data{
              attributes{
                url
              }
            }
          }
          caption
        }
        section_4_title
        section_4_description
        pairs{
          id
          text
          pic{
            data{
              attributes{
                url
              }
            }
          }
        }
        techTitle
        technologies{
          text
          pic{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
}
`;

export const aboutUsQuery= `
query{
  aboutus{
    data{
      attributes{
        heroTitle
        heroDescription
        heroBgImage{
          data{
            attributes{
              url
            }
          } 
        }
        aboutus
        vision
        mission
        faq{
          id
          question
          answer
        }
        ClientCount
        ExperienceCount
        InHouseExpertsCount
        ProjectsCount
        clientsTitle
        clients{
          text
          pic{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
}`;
export const case_study_paginated = `
    query {
      caseStudies(sort: "\${sort}",
      filters:{ or: [{ category:{name : {containsi :"\${category}"}}},{heroTitle :{containsi : "\${title}"}}, { topic_tags:{name : {containsi :"\${tag}"}}}] },
       pagination: { limit: \${limit} }) {
        data {
          id
          attributes {
            publishedAt
            heroTitle
            heroDescription
            heroBgImage{
              data{
                attributes{
                  url
                  formats
                }
              }
            }
            category{
              data{
                attributes{
                  name
                }
              }
            }
            author {
              data {
                attributes {
                  name
                  avatar {
                    data {
                      attributes {
                        formats
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
export const case_study_home = `query{
  caseStudyHome{
    data{
      attributes{
        heroTitle
        heroDescription
        heroBgImage{
          data{
            attributes{
              url
              formats
            }
          }
        }
      }
    }
  }
}`;

  const case_study_filterd = `
    
  `;
export const case_study_query = `
query{
  caseStudies (filters:{ id: { eq: "\${id}" } }){
    data{
      id
      attributes{
        publishedAt
        heroTitle
        heroDescription
        heroBgImage{
          data{
            attributes{
              url
            }
          }
        }
        heroImage{
          data{
            attributes{
              url
              formats
            }
          }
        }
        tags{
          id
          name
          description
        }
        section2MiniTag
        section2Title
        section_2_description
        section2Bg{
          data{
            attributes{
              url
            }
          }
        }
        section2Bg{
          data{
            attributes{
              formats
              url
            }
          }
        }
        section3MiniTitle
        section_3_title
        section_3_description
        section3Slideshow{
          data{
            attributes{
              url
            }
          }
        }
        section4MiniTitle
        section_4_title
        section_4_description
        section_4_cards{
          id
          name
          description
        }
        section_5_pairs{
          name
          description
        }
        section6MiniTitle
        section_6_title
        section_6_description
        section_7_phrase
        cases_list
        category{
          data
          {
            attributes{
              name
            }
          }
        }
      }
    }
  }
}`

export const tagsQuery = `
query{
  topicTags{
    data{
      attributes{
        name
      }
    }
  }
}`

export const categories = `
query{
  categories{
    data{
      attributes{
        name
      }
    }
  }
}`

export const jobrolesQuery = `
query{
  jobRoles{
    data{
      attributes{
        role
      }
    }
  }
}`

export const locationsQuery = `query{
  locations{
    data{
      attributes{
        location
      }
    }
  }
}`

export const departmentQuery = `query{
  departments{
    data{
      attributes{
        DepartmentName
      }
    }
  }
}`

export const expQuery = `query{
  experiences{
    data{
      attributes{
        experienceRange
      }
    }
  }
}`

