using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using NSE.Identidade.API.Configuration;
using System;

namespace NSE.Identidade.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IHostEnvironment hostEnvironment)
        {
            var builder = new ConfigurationBuilder()
                              .SetBasePath(hostEnvironment.ContentRootPath)
                              .AddJsonFile("appsettings.json", true, true)
                              .AddJsonFile($"appsettings.{hostEnvironment.EnvironmentName}.json", true, true);

            if (hostEnvironment.IsDevelopment())
                builder.AddUserSecrets<Startup>();

            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentityConfiguration(Configuration);

            services.AddApiConfiguration();

            services.AddSwaggerGen(s => {
                s.SwaggerDoc("v1", new OpenApiInfo 
                {
                    Title = "NerdStore Enterprise Identity Api",
                    Description = "Api created to increase base microservices communication skills",
                    Contact = new OpenApiContact() { Name = "Thiago Cruz", Email = "thagocruz@gmail.com" },
                    License = new OpenApiLicense() { Name = "MIT", Url = new Uri("https://opensourse.org/licenses/MIT") }
                });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger();
            app.UseSwaggerUI(s => 
            {
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
            });

            app.UserIdentityConfiguration();
            app.UseApiConfiguration(env);
        }
    }
}