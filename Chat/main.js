$('#submit-message').click(function () {
    var userName = $('#userName');
    var message = $('#message');
    

    var newUserName = userName.val();
    var newMessage = message.val();
   

    if (newUserName.trim() == '') {
        alert('Enter the Username!');
        return;
    }

    if (newMessage.trim() == '') {
        alert('Enter the message!');
        return;
    }
    
    var now = new Date();
    var formattedDate = now.getDate()+"."+(now.getMonth()+1) + "."+now.getFullYear() +" "+ now.getHours() + ":" + now.getMinutes();
    var newChatLine = $('<li>');
    newChatLine.html("<p><b>" + newUserName + " </b><i>"+ formattedDate + "</i></p>" + newMessage + "<hr>");
    var chatLine = $('#chat');
    
    
    chatLine.append(newChatLine);
    message.val('');
    userName.val('');
    return false;
});
