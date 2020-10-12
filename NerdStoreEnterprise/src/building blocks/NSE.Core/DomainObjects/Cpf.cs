namespace NSE.Core.DomainObjects
{
    public class Cpf
    {
        public const int CpfMaxLength = 11;
        public string Numero { get; private set; }

        // CTOR do EF
        protected Cpf() { }

        public Cpf(string numero)
        {
            Numero = numero;
        }
    }
}