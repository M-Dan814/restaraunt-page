import item1 from "./img/item1.jpg";
import item2 from "./img/item2.jpg";
import item3 from "./img/item3.jpg";
import item4 from "./img/item4.jpg";

const menu = () => {
  const cont = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "Menu";

  // Creating card for 1st dish
  const cont1 = document.createElement("div");
  const head1 = document.createElement("h2");
  head1.textContent = "Chocolate Parfait";
  const img1 = new Image();
  img1.src = item1;
  img1.classList.add("image");
  const descript1 = document.createElement("div");
  descript1.textContent =
    "This Chocolate Parfait is whipped up by our incredibly talented chefs using the most exquisite ingredients. This will be sure to tickle your taste buds!";
  const price1 = document.createElement("div");
  price1.textContent = "$5.00";
  price1.classList.add("price");
  cont1.append(head1, img1, descript1, price1);
  cont1.classList.add("card");

  // Create card for 2nd dish
  const cont2 = document.createElement("div");
  const head2 = document.createElement("h2");
  head2.textContent = "Chocolate Cookies";
  const img2 = new Image();
  img2.src = item2;
  img2.classList.add("image");
  const descript2 = document.createElement("div");
  descript2.textContent =
    "These Chocolate Cookies will be sure to delight your taste buds. They are baked to perfection using the best possible ingredients.";
  const price2 = document.createElement("div");
  price2.textContent = "$1.50";
  price2.classList.add("price");
  cont2.append(head2, img2, descript2, price2);
  cont2.classList.add("card");

  // Create card for 3rd dish
  const cont3 = document.createElement("div");
  const head3 = document.createElement("h2");
  head3.textContent = "Strawberry Pastries";
  const img3 = new Image();
  img3.src = item3;
  img3.classList.add("image");
  const descript3 = document.createElement("div");
  descript3.textContent =
    "These Strawberry Pastries utilize freshly picked strawberries and our very own handmade vanilla cream. The decorations on this dish ensure that this is a treat not only for your taste buds but for your eyes as well.";
  const price3 = document.createElement("div");
  price3.textContent = "$2.00";
  price3.classList.add("price");
  cont3.append(head3, img3, descript3, price3);
  cont3.classList.add("card");

  // Create card for 4th dish
  const cont4 = document.createElement("div");
  const head4 = document.createElement("h2");
  head4.textContent = "Strawberry Cheesecake";
  const img4 = new Image();
  img4.src = item4;
  img4.classList.add("image");
  const descript4 = document.createElement("div");
  descript4.textContent =
    "This Strawberry Cheesecake is whipped up by our incredibly talented chefs using the most exquisite ingredients. This will be sure to tickle your taste buds!";
  const price4 = document.createElement("div");
  price4.textContent = "$3.50";
  price4.classList.add("price");
  cont4.append(head4, img4, descript4, price4);
  cont4.classList.add("card");

  cont.append(header, cont1, cont2, cont3, cont4);
  cont.classList.add("container");
  return cont;
};

export { menu };
