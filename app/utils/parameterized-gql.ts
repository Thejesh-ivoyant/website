  export function generateDynamicQuery(query: string, params: string[]) {
    return (...values: any[]) => {
      let result = query;
      for (let i = 0; i < params.length; i++) {
        result = result.replace(`\${${params[i]}}`, values[i]);
      }
      return result;
    };
  }
  // Example usage:
  // const query = `
  //   query {
  //     caseStudies(sort: "\${sort}",
  //     filters:{heroTitle :{containsi : "\${title}"}, category:{name : {containsi :"\${category}"}}},
  //     pagination: { limit: \${limit} }) {
  //       data {
  //         attributes {
  //           publishedAt
  //           heroTitle
  //         }
  //       }
  //     }
  //   }
  // `;
  // const dynamicQuery = generateDynamicQuery(query, ['limit', 'sort']);
  // const interpolatedQuery = dynamicQuery(5, 'createdAt:asc');
