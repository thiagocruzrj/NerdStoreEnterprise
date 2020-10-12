using System;

namespace NSE.Core.Messages
{
    public abstract class Command
    {
        public DateTime Timestamp { get; private set; }
    }
}