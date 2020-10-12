using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace NSE.Cliente.API.Data.Mappings
{
    public class ClienteMapping : IEntityTypeConfiguration<Models.Cliente>
    {
        public void Configure(EntityTypeBuilder<Models.Cliente> builder)
        {
            throw new NotImplementedException();
        }
    }
}