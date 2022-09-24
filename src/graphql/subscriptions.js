/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
      id
      name
      time
      type
      day
      buss {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      drivers {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conductors {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
      id
      name
      time
      type
      day
      buss {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      drivers {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conductors {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
      id
      name
      time
      type
      day
      buss {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      drivers {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conductors {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBus = /* GraphQL */ `
  subscription OnCreateBus {
    onCreateBus {
      id
      name
      trackingID
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      status_on
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Schedules {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const onUpdateBus = /* GraphQL */ `
  subscription OnUpdateBus {
    onUpdateBus {
      id
      name
      trackingID
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      status_on
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Schedules {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const onDeleteBus = /* GraphQL */ `
  subscription OnDeleteBus {
    onDeleteBus {
      id
      name
      trackingID
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      status_on
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Schedules {
        items {
          id
          scheduleID
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
      id
      routeName
      pickupPoints
      image
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      distance
      avg_duration
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
      id
      routeName
      pickupPoints
      image
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      distance
      avg_duration
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
      id
      routeName
      pickupPoints
      image
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      Tickets {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      distance
      avg_duration
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRouteImage = /* GraphQL */ `
  subscription OnCreateRouteImage {
    onCreateRouteImage {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRouteImage = /* GraphQL */ `
  subscription OnUpdateRouteImage {
    onUpdateRouteImage {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRouteImage = /* GraphQL */ `
  subscription OnDeleteRouteImage {
    onDeleteRouteImage {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBusImage = /* GraphQL */ `
  subscription OnCreateBusImage {
    onCreateBusImage {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBusImage = /* GraphQL */ `
  subscription OnUpdateBusImage {
    onUpdateBusImage {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBusImage = /* GraphQL */ `
  subscription OnDeleteBusImage {
    onDeleteBusImage {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver {
    onCreateDriver {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver {
    onUpdateDriver {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver {
    onDeleteDriver {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const onCreateConductor = /* GraphQL */ `
  subscription OnCreateConductor {
    onCreateConductor {
      id
      name
      phone
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const onUpdateConductor = /* GraphQL */ `
  subscription OnUpdateConductor {
    onUpdateConductor {
      id
      name
      phone
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const onDeleteConductor = /* GraphQL */ `
  subscription OnDeleteConductor {
    onDeleteConductor {
      id
      name
      phone
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          conductorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
      id
      expired
      token
      userID
      busID
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      price
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
      id
      expired
      token
      userID
      busID
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      price
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
      id
      expired
      token
      userID
      busID
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      price
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBusSchedule = /* GraphQL */ `
  subscription OnCreateBusSchedule {
    onCreateBusSchedule {
      id
      scheduleID
      busID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBusSchedule = /* GraphQL */ `
  subscription OnUpdateBusSchedule {
    onUpdateBusSchedule {
      id
      scheduleID
      busID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBusSchedule = /* GraphQL */ `
  subscription OnDeleteBusSchedule {
    onDeleteBusSchedule {
      id
      scheduleID
      busID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        status_on
        Route {
          id
          routeName
          pickupPoints
          image
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Tickets {
          nextToken
          startedAt
        }
        Schedules {
          nextToken
          startedAt
        }
        routeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDriverSchedule = /* GraphQL */ `
  subscription OnCreateDriverSchedule {
    onCreateDriverSchedule {
      id
      scheduleID
      driverID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDriverSchedule = /* GraphQL */ `
  subscription OnUpdateDriverSchedule {
    onUpdateDriverSchedule {
      id
      scheduleID
      driverID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDriverSchedule = /* GraphQL */ `
  subscription OnDeleteDriverSchedule {
    onDeleteDriverSchedule {
      id
      scheduleID
      driverID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateConductorSchedule = /* GraphQL */ `
  subscription OnCreateConductorSchedule {
    onCreateConductorSchedule {
      id
      scheduleID
      conductorID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateConductorSchedule = /* GraphQL */ `
  subscription OnUpdateConductorSchedule {
    onUpdateConductorSchedule {
      id
      scheduleID
      conductorID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteConductorSchedule = /* GraphQL */ `
  subscription OnDeleteConductorSchedule {
    onDeleteConductorSchedule {
      id
      scheduleID
      conductorID
      schedule {
        id
        name
        time
        type
        day
        buss {
          nextToken
          startedAt
        }
        drivers {
          nextToken
          startedAt
        }
        conductors {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
