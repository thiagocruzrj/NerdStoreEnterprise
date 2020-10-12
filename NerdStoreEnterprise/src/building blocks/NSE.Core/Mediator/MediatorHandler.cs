﻿using FluentValidation.Results;
using MediatR;
using NSE.Core.Messages;
using System.Threading.Tasks;

namespace NSE.Core.Mediator
{
    public class MediatorHandler : IMediatorHandler
    {
        private readonly IMediator _mediator;

        public MediatorHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<ValidationResult> EnviarComando<T>(T comando) where T : Command => await _mediator.Send(comando);

        public Task PublicarEvento<T>(T evento) where T : Event
        {
            throw new System.NotImplementedException();
        }
    }
}