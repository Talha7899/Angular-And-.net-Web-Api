using System.ComponentModel.DataAnnotations;

namespace Asp.NetCore_08_Web_Api.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required long Salary { get; set; }
    }
}
