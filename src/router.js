import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import VehiclesCatalog from './components/VehiclesCatalog.vue'
import ReservationPanel from './components/ReservationPanel.vue'
import ReservationsLeaseholder from './components/ReservationsLeaseholder.vue'
import Team from './components/Team.vue'
import ReservationsEdition from './components/ReservationEdition.vue'

const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/home',
        name: 'home',
        component: Home
    },
    {
        path: '/user/logIn',
        name: 'logIn',
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: '/user/vehiclesCatalog',
        name: 'VehiclesCatalog',
        component: VehiclesCatalog
    },
    {
        path: '/user/Team',
        name: 'Team',
        component: Team
    },
    {
        path: '/user/reservationPanel/:id',
        name: 'ReservationPanel',
        component: ReservationPanel
    },
    {
        path: '/user/reservationsLeaseholder',
        name: 'ReservationsLeaseholder',
        component: ReservationsLeaseholder
    },
    {
        path: '/user/reservationsEdition/:id',
        name: 'ReservationsEdition',
        component: ReservationsEdition
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router