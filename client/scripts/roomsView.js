// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // RoomsView.$select.empty();

    // define an empty array
    let roomSelectorArray = [];

    // push each option in our selector to the array
    $('#roomSelector option').each(function() {
      roomSelectorArray.push($(this).val());
    });

    // for each option, if it's not in our rooms list (aka not in the data and not a room we added, remove it)
    roomSelectorArray.forEach(function(room) {
      if (Rooms.retrieve().indexOf(room) === -1) {
        // remove from selector
        $("#roomSelector option[value='{room}']").remove();
      }
    });

    // for each room in rooms list, if it's not in our selector, add it
    Rooms.retrieve().forEach(function(room) {
      // only add to selector if not already on the list
      if (roomSelectorArray.indexOf(room) === -1) {
        RoomsView.renderRoom(room);
      }
    });

    // set the selector to the current room
    RoomsView.$select.val(Rooms._currentRoom);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append($('<option>', {
      value: roomname,
      text: roomname
    }));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    let selectedRoom = RoomsView.$select.val()
    Rooms.select(selectedRoom);
    RoomsView.render();
    App.fetch();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let roomNameInput = prompt('Please enter the room name you\'d like to use:');
    Rooms.add(roomNameInput);
    RoomsView.render()
  }

};
