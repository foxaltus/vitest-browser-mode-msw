import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.chucknorris.io/jokes/random", () => {
    return HttpResponse.json({
      icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
      id: "hbCl1mPLQHuKuZGij--jZA",
      url: "https://api.chucknorris.io/jokes/hbCl1mPLQHuKuZGij--jZA",
      value: "Chuck Norris can win connect four in three move",
    });
  }),
];
