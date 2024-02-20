using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSChat.Service.Models;

namespace WSChat.Service.DataService
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new ConcurrentDictionary<string, UserConnection>();
        public ConcurrentDictionary<string, UserConnection> Connections => _connections;
    }
}
