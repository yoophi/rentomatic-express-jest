const Room = require("../domain/model/room");

class MemRepo {
  constructor(rooms) {
    this.rooms = rooms;
  }

  list() {
    return this.rooms.map((room) => Room.factory(room));
  }
}

module.exports = MemRepo;
