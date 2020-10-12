using Microsoft.EntityFrameworkCore;
using NSE.Clientes.API.Models;
using NSE.Core.Data;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NSE.Clientes.API.Data.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly ClientesContext _contexto;

        public ClienteRepository(ClientesContext contexto)
        {
            _contexto = contexto;
        }

        public IUnitOfWork UnitOfWork => _contexto;

        public void Adicionar(Cliente cliente)
        {
            _contexto.Clientes.Add(cliente);
        }

        public async Task<Cliente> ObterPorCpf(string cpf) => await _contexto.Clientes.FirstOrDefaultAsync(c => c.Cpf.Numero == cpf);

        public async Task<IEnumerable<Cliente>> ObterTodos() => await _contexto.Clientes.AsNoTracking().ToListAsync();

        public void Dispose()
        {
            _contexto.Dispose();
        }
    }
}