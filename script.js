Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'siyandakopolo2@gmail.com',
    From : "siyandakopolo2@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);