export const placesAutoComplete = async (query) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=bd&proximity=-73.990593%2C40.740121&types=place%2Cpostcode%2Caddress%2Cpoi%2Cneighborhood%2Clocality%2Cdistrict%2Cregion&access_token=pk.eyJ1Ijoic3Jqb3kiLCJhIjoiY2w0cjFzczkzMHd1dDNiczhkcjh4Y3Z3YSJ9.TW2L3JDWJGzt9bGU2a-ANA`;
  const q = await fetch(url, { method: "GET" });
  const json = await q.json();

  let placeNames = json?.features?.map((placeName) => {
    return {
      value: placeName?.place_name,
      label: placeName?.text,
      coords: placeName?.geometry?.coordinates,
    };
  });

  if (placeNames?.length == 0) {
    placeNames = [];
  }

  const data = {
    places: json.features,
    placesNames: placeNames,
  };
  return data;
};
