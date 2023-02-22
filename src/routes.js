import React from 'react'

// Assets
import { ReactComponent as VectorIcon } from './assets/vector.svg'
import { ReactComponent as TicketsIcon } from './assets/tickets.svg'
import { ReactComponent as AgentsIcon } from './assets/agents.svg'
import { ReactComponent as IdeasIcon } from './assets/ideas.svg'

// Components
import { Users, Ideas, Overview, Tickets } from './pages'

const routes = [
  {
    basePath: '/overview',
    sidebarName: 'Overview',
    icon: <VectorIcon />,
    component: <Overview />,
  },
  {
    basePath: '/tickets',
    sidebarName: 'Tickets',
    icon: <TicketsIcon />,
    component: <Tickets />,
  },
  {
    basePath: '/ideas',
    sidebarName: 'Ideas',
    icon: <IdeasIcon />,
    component: <Ideas />,
  },
  {
    path: '/users/:id',
    basePath: '/users',
    sidebarName: 'Users',
    icon: <AgentsIcon />,
    component: <Users />,
  },
]

export default routes
