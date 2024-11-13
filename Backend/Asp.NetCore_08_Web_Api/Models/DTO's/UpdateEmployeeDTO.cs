namespace Asp.NetCore_08_Web_Api.Models.DTO_s
{
    public class UpdateEmployeeDTO
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required long Salary { get; set; }
    }
}
