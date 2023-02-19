// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: function(username, messageText) {
    return MessageView.template({username: username, messageText: messageText});
  },

  template: _.template(`
    <div class="chat">
      <div class="username"><%= username %></div>
      <div><%= messageText %></div>
    </div>
    `, {
      escape: /<%[=-]([\s\S]+?)%>/g,
      interpolate: /<%cleanHtml([\s\S]+?)cleanHtml%>/g,
      evaluate: /<%([\s\S]+?)%>/g
    })
};

// <%  %> - to execute some code
// <%= %> - to print some value in template
// <%- %> - to print some values HTML escaped


