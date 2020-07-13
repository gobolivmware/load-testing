import http from "k6/http";
import { check, sleep } from "k6";

// INIT CODE
export let options = {
  stages: [
    { duration: "2m", target: 1000 }, // below normal load
    // { duration: "5m", target: 3000 },
    //{ duration: "2m", target: 5000 },
    // { duration: "5m", target: 7000 }, // normal load
    // { duration: "2m", target: 10000 },// stress start
    // { duration: "5m", target: 20000 },
    // { duration: "2m", target: 50000 },
    // { duration: "5m", target: 100000 },
    //{ duration: "5m", target: 200000 }, 
    { duration: "10m", target: 0 }, // scale down. Recovery stage.
  ],
};

// similar to the "main" function in Java,
// the default entry for the Virtual Users, for the test start.
export default function () {
  // VIRTUAL USER CODE
  let res = http.get("https://httpbin.org/");
  check(res, { "status was 200": (r) => r.status == 200 });
  //sleep(1);

  //todo : check results on the page
}
