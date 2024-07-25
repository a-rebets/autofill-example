import { defineDb, defineTable, column } from "astro:db";

export const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    address: column.text({ optional: true }),
    tel: column.text({ optional: true }),
    country: column.text({ optional: true }),
    postalCode: column.text({ optional: true }),
    cardNumber: column.text({ optional: true }),
    cardExpDate: column.text({ optional: true }),
    yearOfBirth: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Users },
});
