export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eca20cef5ea88a580d60eae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-76rfrfwi',
                  apiId: 'fb3f32d1-9415-4548-bdd1-7daef885c876'
                },
                {
                  buildHookId: '5eca20ce51f1bc2f4261131c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-496rcu49',
                  apiId: '686c9474-9d12-490e-a885-085698874d15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lukebennett88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-496rcu49.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
