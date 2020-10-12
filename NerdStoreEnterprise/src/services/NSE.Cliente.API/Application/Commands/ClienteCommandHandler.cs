using FluentValidation.Results;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace NSE.Clientes.API.Application.Commands
{
    public class ClienteCommandHandler : IRequestHandler<RegistrarClienteCommand, ValidationResult>
    {
        public async Task<ValidationResult> Handle(RegistrarClienteCommand message, CancellationToken cancellationToken)
        {
            if (!message.EhValido()) return message.ValidationResult;

            return message.ValidationResult;
        }
    }
}