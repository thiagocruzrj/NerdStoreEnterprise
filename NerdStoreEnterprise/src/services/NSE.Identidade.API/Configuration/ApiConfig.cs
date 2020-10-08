using Microsoft.Extensions.DependencyInjection;

namespace NSE.Identidade.API.Configuration
{
    public static class ApiConfig
    {
        public static void AddApiConfiguration(this IServiceCollection services)
        {
            services.AddControllers();
        }
    }
}