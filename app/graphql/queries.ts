export const homeQuery : string = `
query{
  homepage{
    data{
      attributes{
        AboutUs
        AboutUsTitle
        ClientCount
        ExperienceCount
        ProjectsCount
        InHouseExpertsCount
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
export const blogQuery = `query{
  blogs{
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
        job_descriptions{
          data{
            id
            attributes{
              job_id
              Title
              location
            }
          }
        }
      } 
    }
  }
}
`;

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
          description
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
      filters:{ or: [{ category:{name : {containsi :"\${category}"}}},{heroTitle :{containsi : "\${title}"}}] },
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