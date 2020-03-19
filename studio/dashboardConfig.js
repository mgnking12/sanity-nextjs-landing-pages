export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e73e8480b1f7374ebe843c4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j83a7ogv',
                  apiId: 'ee54f6a3-31a3-4977-bc53-e4b149d40425'
                },
                {
                  buildHookId: '5e73e849ffb3ae6d211e74ac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ytn5157u',
                  apiId: 'f52cb9a6-49c1-43dc-ac6e-cfc709ccbcbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mgnking12/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ytn5157u.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
