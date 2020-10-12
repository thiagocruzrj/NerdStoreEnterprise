namespace NSE.Cliente.API.Models
{
    public class Cliente
    {
        public string Nome { get; private set; }
        public string Email { get; private set; }
        public string Cpf { get; private set; }
        public bool Excluido { get; private set; }
        public Endreco Endreco { get; private set; }
    }

    public class Endreco
    { 
    }
}
