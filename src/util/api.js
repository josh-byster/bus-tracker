var API_URL = "https://developer.cumtd.com/api/v2.2/json/";
var MAPBOX_API_KEY =
  "pk.eyJ1Ijoiam9zaC1ieXN0ZXIiLCJhIjoiY2psN2xyZGFoMDY5ZjNxbWtpeDE0dDlwNSJ9.AAJipEPA6e-kLi1Jv3Wpyg";
var CUMTD_API_KEY = "fd4fb84bbbb34acfae890f17144ee131";

function getBuses(stop_id) {
  return fetch(
    `${API_URL}/getdeparturesbystop?key=${CUMTD_API_KEY}&stop_id=${stop_id}`,
    {
      method: "GET"
    }
  ).then(res => res.json());
}

// Get the stop name and additional info
function getStop(stop_id) {
  return fetch(`${API_URL}/getstop?key=${CUMTD_API_KEY}&stop_id=${stop_id}`, {
    method: "GET"
  }).then(res => res.json());
}

function getVehicleInfo(vehicle_id) {
  return fetch(
    `${API_URL}/getvehicle?key=${CUMTD_API_KEY}&vehicle_id=${vehicle_id}`,
    {
      method: "GET"
    }
  ).then(res => res.json());
}

function getNearestStops(latitude, longitude) {
  return fetch(
    `${API_URL}/getstopsbylatlon?key=${CUMTD_API_KEY}&lat=${latitude}&lon=${longitude}`,
    {
      method: "GET"
    }
  ).then(res => res.json());
}
export { getBuses, getStop, MAPBOX_API_KEY, getVehicleInfo, getNearestStops };
