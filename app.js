const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message);
    });
});

const port = process.env.PORT || 4000;
http.listen(port, () => {
    console.log('listening on port 4000');
})
