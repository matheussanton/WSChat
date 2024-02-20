using Microsoft.AspNetCore.SignalR;
using WSChat.Service.DataService;
using WSChat.Service.Models;

namespace WSChat.Service.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedDb _sharedDb;

        public ChatHub(
            SharedDb sharedDb
        )
        {
            _sharedDb = sharedDb;
        }


        public async Task JoinChat(UserConnection connection)
        {
            await Clients.All
                  .SendAsync(method: "ReceiveMessage", "Server", $"{connection.Username} has joined.");
        }

        public async Task JoinSpecificChat(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);

            _sharedDb.Connections[Context.ConnectionId] = connection;

            await Clients.Group(connection.ChatRoom)
                  .SendAsync(method: "ReceiveSpecificMessage", "Server", $"{connection.Username} has joined {connection.ChatRoom} chat.");
        }

        public async Task SendMessage(string message)
        {
            if(_sharedDb.Connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                await Clients.Groups(userConnection.ChatRoom)
                      .SendAsync(method: "ReceiveSpecificMessage", userConnection.Username, message);
            }
        }
    }
}
