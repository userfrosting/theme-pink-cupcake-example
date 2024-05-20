import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'page.index',
            component: () => import('../views/PageIndex.vue')
        },
        {
            path: '/dashboard',
            children: [
                {
                    path: '',
                    name: 'dashboard.index',
                    component: () => import('../views/DashboardIndex.vue')
                },
                {
                    path: 'table',
                    name: 'dashboard.table',
                    component: () => import('../views/DashboardTable.vue')
                },
                {
                    path: 'template',
                    name: 'dashboard.components',
                    children: [
                        {
                            path: 'alerts',
                            name: 'dashboard.components.alerts',
                            component: () => import('../views/DashboardAlerts.vue')
                        },
                        {
                            path: 'test',
                            name: 'dashboard.components.cards',
                            component: () => import('../views/DashboardComponentsCards.vue')
                        }
                    ]
                }
            ]
        }
    ]
})

export default router
