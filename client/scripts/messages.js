// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
 
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // input ALL data from server and then sort into Map container
  // input is an Array of Objects: [{},{},{}] 
  // input.message_id -> key in our Map container

  add: function(inputData) {
    inputData.forEach(function(message) {
      // if the room is not in our data yet, we need to load an new Map() in before storing data in
      if (!(message.roomname in Messages._data)) {
        Messages._data[message.roomname] = new Map();
        Rooms.add(message.roomname);
      }

      // if the message is NOT already in our data then we want to add it in
      if (!(Messages._data[message.roomname].has(message.message_id))) {
        // update data directly
        Messages._data[message.roomname].set(message.message_id, message);
      }

      // // if the room is not in our data yet, we need to load an empty object in before storing data in
      // if (!Messages._data.has(message.roomname)) {
      //   Messages._data.set(message.roomname, {});
      // }

      // // pull data from data storage to reference
      // let roomMessagesObj = Messages._data.get(message.roomname);
      // // if the message is NOT already in our data then we want to add it in
      // if (!(message.message_id in roomMessagesObj)) {
      //   // update pulled data
      //   roomMessagesObj[message.message_id] = message;
      //   // push the data back into data storage
      //   Messages._data.set(message.roomname, roomMessagesObj);
    });

    console.log(Messages._data);

  },
    // NOTES on add
      // _data = {}
      // receive a room number of 2302
      // _data = {2302: {}}
      // roomMessagesObj = {}
      // roomMessagesObj = {83915: {"message"}}
      // _data = {2302: {83915: {"message"}}}

      // if (!_data.has(message.message_id)) {
      // _data.set(message.roomname: {message.message_id: message});
      // }

      // C: ^^

  retrieve: function() {
    return Array.from(Messages._data[Rooms._currentRoom].values());
    //return Messages._data;
  }, // pulls data from client

  // retrieve/sort by room
  // If blank, default room or pull everything

  // [roomname, obj w. all message info]
  // {83915: {message}, 12389: {message}, 12329: {message}}
  // {2302: {83915: {message}, 12389: {message}, 12329: {message}}, 2305: {123: {message}, 65252: {message}, 223: {message}}}
};
