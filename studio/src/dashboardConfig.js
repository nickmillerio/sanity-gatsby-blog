export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f728c01210139398dbda133',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cea7c6jc',
                  apiId: '5736adb5-4d61-4684-84e1-fab3d332d2c5'
                },
                {
                  buildHookId: '5f728c0164c68838c70a8a13',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r7bcygti',
                  apiId: '63bec064-0f6a-424d-92a6-089d6b7f121e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickmillerio/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r7bcygti.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
