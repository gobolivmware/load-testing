import http from "k6/http";
import { check, sleep } from "k6";

// INIT CODE
export let options = {
  stages: [
    { duration: "5s", target: 2 }, // below normal load
    { duration: "5s", target: 10 }, // normal load
    { duration: "5s", target: 20 }, // overloaded
    { duration: "5s", target: 2 }, // scale down
  ],
  thresholds: {
    http_req_duration: ["p(90)<500"],
    http_req_duration: ["p(95)<800"],
  },
};

// similar to the "main" function in Java,
// the default entry for the Virtual Users, for the test start.
export default function () {
  // VIRTUAL USER CODE
  let res = http.get("https://stg.pathfinder.vmware.com/");
  check(res, { "status was 200": (r) => r.status == 200 });
}
