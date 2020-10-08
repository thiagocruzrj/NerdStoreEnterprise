using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace NSE.WebApp.MVC.Services
{
    public abstract class Service
    {
        protected StringContent ObterConteudo(object dado)
        {
            return new StringContent(
                JsonSerializer.Serialize(dado),
                Encoding.UTF8,
                "application/json");
        }
    }
}
