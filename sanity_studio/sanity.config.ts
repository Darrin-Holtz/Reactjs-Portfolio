import {defineConfig} from 'sanity'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'react responsive portfolio website',

  projectId: '2w0dcf1x',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), 
    dashboardTool({ 
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '',
              buildHookId: '',
              name: 'sanity-darrin-portfolio-studio',
            },
            {
              title: 'Darrin Portfolio Website',
              apiId: '8a6b0018-5b55-46eb-9f38-8487eed20da4',
              buildHookId: '',
              url: 'https://darrinholtz.netlify.app'
            }
          ]
        })
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
