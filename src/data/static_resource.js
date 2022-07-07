// uuid: "1VH15613",
const seed = {
  version: "V3",
  comment: ["Hello", "World"],
  screenComment:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dolores.",
  deviceType: "RIGHT_EDGE",
  size: "12",
  productType: 22,
  name: "WICHTIG",
  type: "WORD",
  range: {
    type: "tooltip_loop",
    values: [0, 1, 1],
  },
  list: ["M01|1", "M02|2", "M03|3"],
  default: "separator",
  unit: "unit31",
  tags: "bool byte",
  edit: "attribute can be edited",
  order: "99",
  offset: 2,
  multi: 3,
  active: true,
  export: false,
  colorEdit: "#ffffff",
  colorReadonly: "#000000",
  colorTextEdit: "#000000",
  colorTextReadOnly: "#ffffff",
  rules: {
    IO: [
      {
        sync: [0, 0],
      },
      {
        sync: [1, 1],
      },
    ],
  },
  include: { firstName: "John", lastName: "Doe" },
};

const seeding_records = 55;

export const seed_data = () => {
  let static_resource = [];
  for (let i = 0; i < seeding_records; i++) {
    static_resource.push({
      ...seed,
      uuid: Math.floor(Math.random() * 10000) + 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }
  return static_resource;
};
