import Event from "../pages/Event";
import Login from "../pages/Login";

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}
interface IRoute {
    path: string,
    element: React.FC
}
export const privateRoutes:IRoute[] = [
    {path: RouteNames.EVENT , element: Event}
]
export const publicRoutes:IRoute[] = [
    {path: RouteNames.LOGIN , element: Login},
]