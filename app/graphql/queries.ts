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
  console.warn("getAuthorQuery id is ", id);
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