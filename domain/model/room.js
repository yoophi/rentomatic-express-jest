class Room {
  constructor({ code, size, price, longitude, latitude }) {
    this.code = code;
    this.size = size;
    this.price = price;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  static factory({ code, size, price, longitude, latitude }) {
    return new Room({
      code,
      size,
      price,
      longitude,
      latitude,
    });
  }
}
module.exports = Room;
