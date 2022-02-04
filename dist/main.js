(() => {
  "use strict";
  const e = "b35f66fbd381c1f2047a929e45bdf011",
    t = document.querySelector(".container"),
    n = {
      searchBar: document.querySelector("#searchBar"),
      container: document.querySelector(".container"),
      cityNameContainer: document.querySelector(".city-name"),
    },
    a = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  n.searchBar.addEventListener("keyup", (c) => {
    if ("Enter" === c.key) {
      const r =
        "https://api.openweathermap.org/data/2.5/forecast/?q=" +
        c.currentTarget.value.toLowerCase() +
        "&appid=" +
        e;
      (c.currentTarget.value = ""),
        fetch(r)
          .then((e) => e.json())
          .then((c) => {
            const r = c.city.coord.lon,
              d = c.city.coord.lat;
            (n.cityNameContainer.innerHTML = c.city.name),
              fetch(
                "https://api.openweathermap.org/data/2.5/onecall?lat=" +
                  d +
                  "&lon=" +
                  r +
                  "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" +
                  e
              )
                .then((e) => e.json())
                .then((e) => {
                  console.log(
                    "Welcome to this basic weather app. this is not a product but the product of an academic exercise."
                  ),
                    (() => {
                      for (; t.firstChild; ) t.removeChild(t.firstChild);
                    })();
                  for (let t = 0; t < 5; t++) {
                    const c = new Date();
                    let r = a[(c.getDay() + t) % 7];
                    const d = e.daily[t],
                      o = document.createElement("div");
                    o.classList.add("card"), n.container.appendChild(o);
                    const i = document.createElement("div");
                    i.classList.add("imgBx"), o.appendChild(i);
                    const s = document.createElement("img");
                    (s.src =
                      "http://openweathermap.org/img/wn/" +
                      d.weather[0].icon +
                      "@2x.png"),
                      i.appendChild(s);
                    const l = document.createElement("div");
                    l.classList.add("contentBx"), o.appendChild(l);
                    const p = document.createElement("h2");
                    (p.innerHTML = r), l.appendChild(p);
                    const m = document.createElement("h4");
                    (m.innerHTML = d.weather[0].description), l.appendChild(m);
                    const h = document.createElement("div");
                    h.classList.add("color"), l.appendChild(h);
                    const u = document.createElement("h3");
                    (u.innerHTML = "Temp:"), h.appendChild(u);
                    const y = document.createElement("span");
                    y.classList.add("current-temp"),
                      (y.innerHTML = d.temp.day + "°C"),
                      h.appendChild(y);
                    const C = document.createElement("div");
                    C.classList.add("details"), l.appendChild(C);
                    const L = document.createElement("h3");
                    (L.innerHTML = "More:"), C.appendChild(L);
                    const f = document.createElement("span");
                    f.classList.add("min-temp"),
                      (f.innerHTML = d.temp.min + "°C"),
                      C.appendChild(f);
                    const E = document.createElement("span");
                    E.classList.add("max-temp"),
                      (E.innerHTML = d.temp.max + "°C"),
                      C.appendChild(E);
                  }
                });
          })
          .catch((e) => {
            for (
              console.error("Error:", "not a place!");
              n.container.firstChild;

            )
              n.container.removeChild(n.container.firstChild);
            return alert(
              "Are you sure you aren't holding your map upside down?"
            );
          });
    }
  });
})();
