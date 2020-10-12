using NSE.Core.DomainObjects;
using System;

namespace NSE.Cliente.API.Models
{
    public class Endreco : Entity
    {
        public Endreco(string logradouro, string numero, string complemento, string bairro, string cep, string cidade, string estado)
        {
            Logradouro = logradouro;
            Numero = numero;
            Complemento = complemento;
            Bairro = bairro;
            Cep = cep;
            Cidade = cidade;
            Estado = estado;
        }

        // EF Relation
        protected Endreco() { }

        public Guid ClientId { get; private set; }
        public string Logradouro { get; private set; }
        public string Numero { get; private set; }
        public string Complemento { get; private set; }
        public string Bairro { get; private set; }
        public string Cep { get; private set; }
        public string Cidade { get; private set; }
        public string Estado { get; private set; }

        // EF Relation
        public Cliente Cliente { get; private set; }
    }
}