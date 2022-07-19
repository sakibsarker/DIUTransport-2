export const getDirectionMapBox = async (start, end) => {
  console.log(start, end);
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[1]},${start[0]};${end[1]},${end[0]}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic3Jqb3kiLCJhIjoiY2w0cjFzczkzMHd1dDNiczhkcjh4Y3Z3YSJ9.TW2L3JDWJGzt9bGU2a-ANA`;
  const query = await fetch(url, { method: "GET" });
  console.log(url);
  const json = await query.json();

  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };

  return route;
};
