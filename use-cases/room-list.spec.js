const RoomListUseCase = require("./room-list");

test("should return room list", () => {
  repo = {};
  repo.list = jest.fn();
  repo.list.mockReturnValueOnce([]);
  roomListUseCase = new RoomListUseCase(repo);
  result = roomListUseCase.execute();
  expect(repo.list.mock.calls.length).toBe(1);
  expect(result).toEqual([]);
});
