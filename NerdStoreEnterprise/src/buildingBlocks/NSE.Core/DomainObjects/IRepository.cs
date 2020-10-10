using System;

namespace NSE.Core.DomainObjects
{
    public class IRepository<T> : IDisposable where T : Entity, IAggregateRoot
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}