import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PackageTravel from "../views/PackageTravel.vue";
import DomesticTourism from "../views/DomesticTourism.vue"
import ForeignTourism from "../views/ForeignTourism.vue"
import DomesticTourismFromTrip from "../views/DomesticTourismFromTrip.vue"
import ForeignTourismTrip from "../views/ForeignTourismTrip.vue"
import PackageTravelTrip from "../views/PackageTravelTrip.vue"
import BookingFlight from "../views/BookingFlight.vue"
import BookHotel from "../views/BookHotel.vue"

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/DomesticTourism",
        name: "DomesticTourism",
        component: DomesticTourism,
    },
    {
        path: "/DomesticTourism/:id",
        name: "DomesticTourismFromTrip",
        component: DomesticTourismFromTrip,
        props: true,
    },
    {
        path: "/ForeignTourism",
        name: "ForeignTourism",
        component: ForeignTourism,
    },
    {
        path: "/ForeignTourism/:id",
        name: "ForeignTourismTrip",
        component: ForeignTourismTrip,
        props: true,
    },
    {
        path: "/PackageTravel",
        name: "PackageTravel",
        component: PackageTravel,
    },
    {
        path: "/PackageTravel/:id",
        name: "PackageTravelTrip",
        component: PackageTravelTrip,
        props: true,
    },
    {
        path: "/BookingFlight",
        name: "BookingFlight",
        component: BookingFlight,
    },
    {
        path: "/BookHotel",
        name: "BookHotel",
        component: BookHotel,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;