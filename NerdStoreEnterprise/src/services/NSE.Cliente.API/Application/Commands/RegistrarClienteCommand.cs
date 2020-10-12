using System;

namespace NSE.Clientes.API.Application.Commands
{
    public class RegistrarClienteCommand
    {
        public Guid Id { get; private set; }
        public string Nome { get; private set; }
        public string Email { get; private set; }
        public string Cpf { get; private set; }
    }
}