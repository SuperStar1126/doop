import { ComponentType } from "react";

export type RouteType = {
    name: string;
    component: ComponentType<any>;
    options?: object;
};
