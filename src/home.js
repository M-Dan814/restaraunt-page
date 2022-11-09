const home = () => {
  const home_body = document.createElement("div");

  // Restaraunt Name
  const restaraunt_name = document.createElement("h1");
  restaraunt_name.textContent = "Dayan's Delicious Desserts";
  restaraunt_name.classList.add("Name");

  // Create a Reviews Section
  const review = document.createElement("div");
  review.id = "review";
  const heading1 = document.createElement("h2");
  heading1.textContent = "Reviews";
  review.append(heading1);
  const review_text = document.createElement("div");
  review_text.textContent +=
    "Dayan's Delicious Desserts cooked up some of the most delightful desserts I have ever tasted in my life! I would recommend any dessert enjoyer to go here so they can taste the delicious goodness for themselves.";
  const reviewer = document.createElement("div");
  reviewer.textContent = "Generic Person";
  review.append(review_text);
  review.append(reviewer);
  review.classList.add("card");

  // Create the Time Section
  const times = document.createElement("div");
  times.id = "times";
  const heading2 = document.createElement("h2");
  heading2.textContent = "Times";
  times.append(heading2);
  const time_list = document.createElement("ul");
  const t1 = document.createElement("li");
  t1.textContent = "Monday: 08:00 - 22:00";
  const t2 = document.createElement("li");
  t2.textContent = "Tuesday: 08:00 - 22:00";
  const t3 = document.createElement("li");
  t3.textContent = "Wednesday: 08:00 - 22:00";
  const t4 = document.createElement("li");
  t4.textContent = "Thursday: 08:00 - 22:00";
  const t5 = document.createElement("li");
  t5.textContent = "Friday: 08:00 - 20:00";
  const t6 = document.createElement("li");
  t6.textContent = "Saturday: 08:00 - 20:00";
  const t7 = document.createElement("li");
  t7.textContent = "Sunday: 08:00 - 20:00";
  time_list.append(t1, t2, t3, t4, t5, t6, t7);
  times.append(time_list);
  times.classList.add("card");

  // Create the Location Section
  const loc = document.createElement("div");
  loc.id = "location";
  const heading3 = document.createElement("h2");
  heading3.textContent = "Location";
  loc.append(heading3);
  const location = document.createElement("div");
  location.textContent +=
    "Some City Somewhere, Some Town Somewhere, Some Street Somewhere, Building Somewhere";
  loc.append(location);
  loc.classList.add("card");
  // Appending the divs
  home_body.append(restaraunt_name, review, times, loc);
  home_body.classList.add("container");
  return home_body;
};

export { home };
