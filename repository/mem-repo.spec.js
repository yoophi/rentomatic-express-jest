const Room = require("../domain/model/room");
const MemRepo = require("./mem-repo");

const roomObjects = () => [
  {
    code: "f853578c-fc0f-4e65-81b8-566c5dffa35a",
    size: 215,
    price: 39,
    longitude: -0.09998975,
    latitude: 51.75436293,
  },
  {
    code: "fe2c3195-aeff-487a-a08f-e0bdc0ec6e9a",
    size: 405,
    price: 66,
    longitude: 0.18228006,
    latitude: 51.74640997,
  },
  {
    code: "913694c6-435a-4366-ba0d-da5334a611b2",
    size: 56,
    price: 60,
    longitude: 0.27891577,
    latitude: 51.45994069,
  },
  {
    code: "eed76e77-55c1-41ce-985d-ca49bf6c0585",
    size: 93,
    price: 48,
    longitude: 0.33894476,
    latitude: 51.39916678,
  },
];

test("should get repository list without parameters", () => {
  memRepo = new MemRepo(roomObjects());
  rooms = roomObjects().map((room) => Room.factory(room));
  expect(memRepo.list()).toEqual(rooms);
});
