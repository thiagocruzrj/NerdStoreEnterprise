using NSE.Clientes.API.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NSE.Clientes.API.Data.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        public void Adicionar(Cliente cliente)
        {
            throw new NotImplementedException();
        }

        public Task<Cliente> ObterPorCpf(string cpf)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Cliente>> ObterTodos()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
