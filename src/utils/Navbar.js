import { Generic } from "../View/Generic";
import Home from "../page/Home";
import About from "../page/About";
import Service from "../page/Service";
import News from "../page/News";
import Gallery from "../page/Gallery";
import Contact from "../page/Contact";
export const navbar = [
  {
    id: 1,
    path: "/home",
    title: "Home",
    component: Home,
  },
  {
    id: 2,
    path: "/service",
    title: "Service",
    component: Service,
  },
  {
    id: 3,
    path: "/gallery",
    title: "Gallery",
    component: Gallery,
  },
  {
    id: 4,
    path: "/about-us",
    title: "About Us",
    component: About,
  },
  {
    id: 5,
    path: "/news",
    title: "News",
    component: News,
  },
  {
    id: 6,
    path: "/contact",
    title: "Contact",
    component: Contact,
  },
];
