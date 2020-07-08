import http from "k6/http";
import { check, sleep } from "k6";

// init code
export let options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "10s", target: 10 },
    { duration: "20s", target: 0 },
  ],
};

// similar to the "main" function in Java,
// the default entry for the Virtual Users, for the test start.
export default function () {

  // VIRTUAL USER CODE
  let res = http.get("https://httpbin.org/");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
};
