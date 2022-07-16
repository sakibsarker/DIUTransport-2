import Polyline from "@mapbox/polyline";
export const getDirectionsFromSourceToDest = async (
  startLoc,
  destinationLoc
) => {
  try {
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`
    );
    let respJson = await resp.json();
    console.log(respJson);
    let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });

    return coords;
  } catch (error) {
    alert(error);
    return error;
  }
};
