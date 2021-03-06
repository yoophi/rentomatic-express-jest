class RoomListUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute() {
    return this.repo.list();
  }
}

module.exports = RoomListUseCase;
