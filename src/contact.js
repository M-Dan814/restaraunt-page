

const contact = () => {
    const cont = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Contact";

    // Creating card for 1st employee
    const cont1 = document.createElement("div");
    const head1 = document.createElement("h2");
    head1.textContent = "Sous Chef";
    const contInfo1 = document.createElement("ul");
    const num1 = document.createElement("li");
    num1.textContent = "Contact Number: 555-555-555";
    const email1 = document.createElement("li");
    email1.textContent = "Email: realEmail@notfakeemail.com";
    contInfo1.append(num1, email1);
    cont1.append(head1, contInfo1);
    cont1.classList.add("card");

    // Create card for 2nd employee
    const cont2 = document.createElement("div");
    const head2 = document.createElement("h2");
    head2.textContent = "Chef";
    const contInfo2 = document.createElement("ul");
    const num2 = document.createElement("li");
    num2.textContent = "Contact Number: 555-555-555";
    const email2 = document.createElement("li");
    email2.textContent = "Email: realEmail@notfakeemail.com";
    contInfo2.append(num2, email2);
    cont2.append(head2, contInfo2);
    cont2.classList.add("card");

    // Create card for 3rd employee
    const cont3 = document.createElement("div");
    const head3 = document.createElement("h2");
    head3.textContent = "Waiter";
    const contInfo3 = document.createElement("ul");
    const num3 = document.createElement("li");
    num3.textContent = "Contact Number: 555-555-555";
    const email3 = document.createElement("li");
    email3.textContent = "Email: realEmail@notfakeemail.com";
    contInfo3.append(num3, email3);
    cont3.append(head3, contInfo3);
    cont3.classList.add("card");

    cont.append(header, cont1, cont2, cont3);
    cont.classList.add("container");
    return cont;
}

export { contact };