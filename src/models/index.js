// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Schedule, Bus, Driver, Conductor, BusImage, Route, RouteImage, Ticket, BusSchedule, DriverSchedule, ConductorSchedule } = initSchema(schema);

export {
  Schedule,
  Bus,
  Driver,
  Conductor,
  BusImage,
  Route,
  RouteImage,
  Ticket,
  BusSchedule,
  DriverSchedule,
  ConductorSchedule
};