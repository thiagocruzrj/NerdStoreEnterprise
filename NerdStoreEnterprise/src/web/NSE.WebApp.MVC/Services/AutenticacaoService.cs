using Microsoft.Extensions.Options;
using NSE.WebApp.MVC.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace NSE.WebApp.MVC.Services
{
    public class AutenticacaoService : Service, IAutenticacaoService
    {
        private readonly HttpClient _httpClient;

        public AutenticacaoService(HttpClient httpClient,
                                   IOptions<AppSettings> settings)
        {
            httpClient.BaseAddress = new Uri(settings.Value.AutenticacaoUrl);
            _httpClient = httpClient;
        }
    }
}
