using Asp.NetCore_08_Web_Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Asp.NetCore_08_Web_Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
