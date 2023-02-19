// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    Messages.retrieve().forEach(function(message) {
      MessagesView.renderMessage(message.username, message.text);
    });
  },

  renderMessage: function(username, message) {
    // TODO: Render a single message.
    MessagesView.$chats.append(MessageView.render(username, message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // MessagesView.$chats.on('click', function() {
    //   Friends.toggleStatus(username);
    // }
    Friends.toggleStatus(event.target);
  }
};
