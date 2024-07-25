import { db, Users } from "astro:db";

export default async function () {
  await db.insert(Users).values({
    id: 0,
    name: "John Doe",
    email: "john.doe@example.com",
    address: "",
    tel: "+48111222333",
    postalCode: "00-000",
    country: "Poland",
    cardNumber: "",
    cardExpDate: "",
    yearOfBirth: "",
  });
}
