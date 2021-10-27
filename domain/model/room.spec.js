const { v4: uuid } = require("uuid");
const Room = require("./room");

test("room should be initialized ", () => {
  code = uuid();
  room = new Room({
    code,
    size: 200,
    price: 10,
    longitude: -0.09998975,
    latitude: 51.75436293,
  });
  expect(room.code).toBe(code);
  expect(room.size).toBe(200);
  expect(room.price).toBe(10);
  expect(room.longitude).toBe(-0.09998975);
  expect(room.latitude).toBe(51.75436293);
});

test("room should be initialized by factory", () => {
  code = uuid();
  room = Room.factory({
    code,
    size: 200,
    price: 10,
    longitude: -0.09998975,
    latitude: 51.75436293,
  });
  expect(room.code).toBe(code);
  expect(room.size).toBe(200);
  expect(room.price).toBe(10);
  expect(room.longitude).toBe(-0.09998975);
  expect(room.latitude).toBe(51.75436293);
});
