using EasyNetQ;
using NSE.Core.Messages.Integration;
using System;
using System.Threading.Tasks;

namespace NSE.MessageBus
{
    public class MessageBus : IMessageBus
    {
        private IBus _bus;
        private readonly string _connStr;

        public MessageBus(string connStr)
        {
            _connStr = connStr;
            TryConnect();
        }

        public bool IsConnected { get; }

        public void Publish<T>(T message) where T : IntegrationEvent
        {
            TryConnect();
            _bus.Publish(message);
        }

        public Task PublishAsync<T>(T message) where T : IntegrationEvent
        {
            throw new NotImplementedException();
        }

        public TResponse Request<TRequest, TResponse>(TRequest request)
            where TRequest : IntegrationEvent
            where TResponse : ResponseMessage
        {
            throw new NotImplementedException();
        }

        public Task<TResponse> RequestAsync<TRequest, TResponse>(TRequest request)
            where TRequest : IntegrationEvent
            where TResponse : ResponseMessage
        {
            throw new NotImplementedException();
        }

        public IDisposable Respond<TRequest, TResponse>(Func<TRequest, TResponse> responder)
            where TRequest : IntegrationEvent
            where TResponse : ResponseMessage
        {
            throw new NotImplementedException();
        }

        public IDisposable RespondAsync<TRequest, TResponse>(Func<TRequest, Task<TResponse>> responder)
            where TRequest : IntegrationEvent
            where TResponse : ResponseMessage
        {
            throw new NotImplementedException();
        }

        public void Subscribe<T>(string subscriptionId, Action<T> onMessage) where T : class
        {
            throw new NotImplementedException();
        }

        public void SubscribeAsync<T>(string subscriptionId, Action<T, Task> onMessage) where T : class
        {
            throw new NotImplementedException();
        }

        private void TryConnect()
        {
            if (IsConnected) return;
            _bus = RabbitHutch.CreateBus(_connStr);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}