using Microsoft.EntityFrameworkCore;
using NSE.Catalog.API.Models;

namespace NSE.Catalog.API.Data
{
    public class CatalogoContext : DbContext
    {
        public CatalogoContext(DbContextOptions<CatalogoContext> options) : base(options) { }

        public DbSet<Produto> Produtos { get; set; }
    }
}