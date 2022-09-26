import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConductorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketSaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConductorScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteBusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Schedule {
  readonly id: string;
  readonly name?: string | null;
  readonly time?: string | null;
  readonly type?: string | null;
  readonly day?: string | null;
  readonly buss?: (BusSchedule | null)[] | null;
  readonly drivers?: (DriverSchedule | null)[] | null;
  readonly conductors?: (ConductorSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Schedule, ScheduleMetaData>);
  static copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}

export declare class Bus {
  readonly id: string;
  readonly name: string;
  readonly trackingID?: string | null;
  readonly Driver?: Driver | null;
  readonly Conductor?: Conductor | null;
  readonly BusImages?: (BusImage | null)[] | null;
  readonly status_on?: boolean | null;
  readonly TicketSales?: (TicketSale | null)[] | null;
  readonly Schedules?: (BusSchedule | null)[] | null;
  readonly routeID: string;
  readonly routes?: (RouteBus | null)[] | null;
  readonly Tickets?: (Ticket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly busDriverId?: string | null;
  readonly busConductorId?: string | null;
  constructor(init: ModelInit<Bus, BusMetaData>);
  static copyOf(source: Bus, mutator: (draft: MutableModel<Bus, BusMetaData>) => MutableModel<Bus, BusMetaData> | void): Bus;
}

export declare class Driver {
  readonly id: string;
  readonly name: string;
  readonly licenseNumber: string;
  readonly phone: string;
  readonly licenseExpiry?: string | null;
  readonly Bus?: Bus | null;
  readonly Schedules?: (DriverSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Driver, DriverMetaData>);
  static copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

export declare class Conductor {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly Bus?: Bus | null;
  readonly Schedules?: (ConductorSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Conductor, ConductorMetaData>);
  static copyOf(source: Conductor, mutator: (draft: MutableModel<Conductor, ConductorMetaData>) => MutableModel<Conductor, ConductorMetaData> | void): Conductor;
}

export declare class BusImage {
  readonly id: string;
  readonly tags?: (string | null)[] | null;
  readonly caption?: string | null;
  readonly url?: string | null;
  readonly busID: string;
  readonly Bus?: Bus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BusImage, BusImageMetaData>);
  static copyOf(source: BusImage, mutator: (draft: MutableModel<BusImage, BusImageMetaData>) => MutableModel<BusImage, BusImageMetaData> | void): BusImage;
}

export declare class TicketSale {
  readonly id: string;
  readonly expired?: boolean | null;
  readonly token: string;
  readonly userID: string;
  readonly busID: string;
  readonly routeID: string;
  readonly Route?: Route | null;
  readonly Bus?: Bus | null;
  readonly price: number;
  readonly name: string;
  readonly paymentVia?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TicketSale, TicketSaleMetaData>);
  static copyOf(source: TicketSale, mutator: (draft: MutableModel<TicketSale, TicketSaleMetaData>) => MutableModel<TicketSale, TicketSaleMetaData> | void): TicketSale;
}

export declare class Route {
  readonly id: string;
  readonly routeName: string;
  readonly pickupPoints?: (string | null)[] | null;
  readonly image?: string | null;
  readonly RouteImages?: (RouteImage | null)[] | null;
  readonly Buses?: (RouteBus | null)[] | null;
  readonly TicketSales?: (TicketSale | null)[] | null;
  readonly distance?: number | null;
  readonly avg_duration?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Route, RouteMetaData>);
  static copyOf(source: Route, mutator: (draft: MutableModel<Route, RouteMetaData>) => MutableModel<Route, RouteMetaData> | void): Route;
}

export declare class RouteImage {
  readonly id: string;
  readonly url?: string | null;
  readonly tags?: string | null;
  readonly caption?: string | null;
  readonly routeID: string;
  readonly Route?: Route | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RouteImage, RouteImageMetaData>);
  static copyOf(source: RouteImage, mutator: (draft: MutableModel<RouteImage, RouteImageMetaData>) => MutableModel<RouteImage, RouteImageMetaData> | void): RouteImage;
}

export declare class Ticket {
  readonly id: string;
  readonly busID: string;
  readonly Bus?: Bus | null;
  readonly price: number;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ticket, TicketMetaData>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}

export declare class BusSchedule {
  readonly id: string;
  readonly schedule: Schedule;
  readonly bus: Bus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BusSchedule, BusScheduleMetaData>);
  static copyOf(source: BusSchedule, mutator: (draft: MutableModel<BusSchedule, BusScheduleMetaData>) => MutableModel<BusSchedule, BusScheduleMetaData> | void): BusSchedule;
}

export declare class DriverSchedule {
  readonly id: string;
  readonly schedule: Schedule;
  readonly driver: Driver;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DriverSchedule, DriverScheduleMetaData>);
  static copyOf(source: DriverSchedule, mutator: (draft: MutableModel<DriverSchedule, DriverScheduleMetaData>) => MutableModel<DriverSchedule, DriverScheduleMetaData> | void): DriverSchedule;
}

export declare class ConductorSchedule {
  readonly id: string;
  readonly schedule: Schedule;
  readonly conductor: Conductor;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ConductorSchedule, ConductorScheduleMetaData>);
  static copyOf(source: ConductorSchedule, mutator: (draft: MutableModel<ConductorSchedule, ConductorScheduleMetaData>) => MutableModel<ConductorSchedule, ConductorScheduleMetaData> | void): ConductorSchedule;
}

export declare class RouteBus {
  readonly id: string;
  readonly bus: Bus;
  readonly route: Route;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RouteBus, RouteBusMetaData>);
  static copyOf(source: RouteBus, mutator: (draft: MutableModel<RouteBus, RouteBusMetaData>) => MutableModel<RouteBus, RouteBusMetaData> | void): RouteBus;
}