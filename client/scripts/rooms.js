// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  _currentRoom: null,

  add: function(roomname) {
    if (!roomname) {
      return;
    }

    Rooms._data.add(roomname);
  },

  select: function(roomname) {
    Rooms._currentRoom = roomname;
  },

  retrieve: function() {
    return Array.from(Rooms._data);
  }
};




