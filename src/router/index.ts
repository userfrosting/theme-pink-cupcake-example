import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            redirect: { name: 'page.index' },
            component: () => import('../layouts/LayoutPage.vue'),
            children: [
                {
                    path: '/',
                    name: 'page.index',
                    component: () => import('../views/PageIndex.vue')
                },
                {
                    path: 'about',
                    name: 'page.about',
                    component: () => import('../views/PageIndex.vue')
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import('../layouts/LayoutDashboard.vue'),
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
                    path: 'components',
                    name: 'dashboard.components',
                    children: [
                        {
                            path: 'alerts',
                            name: 'dashboard.components.alerts',
                            component: () => import('../views/DashboardAlerts.vue')
                        },
                        {
                            path: 'cards',
                            name: 'dashboard.components.cards',
                            component: () => import('../views/DashboardComponentsCards.vue')
                        },
                        {
                            path: 'uikit',
                            name: 'dashboard.components.uikit',
                            component: () => import('../views/DashboardUiKit.vue')
                        }
                    ]
                },
                {
                    path: 'auth',
                    name: 'dashboard.auth',
                    children: [
                        {
                            path: 'login',
                            name: 'dashboard.auth.login',
                            component: () => import('../views/DashboardLogin.vue')
                        },
                        {
                            path: 'register',
                            name: 'dashboard.auth.register',
                            component: () => import('../views/DashboardRegister.vue')
                        },
                        {
                            path: 'forgot-password',
                            name: 'dashboard.auth.forgot-password',
                            component: () => import('../views/DashboardForgotPassword.vue')
                        },
                        {
                            path: 'resend-verification',
                            name: 'dashboard.auth.resend-verification',
                            component: () => import('../views/DashboardResendVerification.vue')
                        }
                    ]
                }
            ]
        }
    ]
})

export default router
