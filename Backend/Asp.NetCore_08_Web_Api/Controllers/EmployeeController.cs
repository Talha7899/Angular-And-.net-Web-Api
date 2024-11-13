using Asp.NetCore_08_Web_Api.Data;
using Asp.NetCore_08_Web_Api.Models;
using Asp.NetCore_08_Web_Api.Models.DTO_s;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Asp.NetCore_08_Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext db;

        public EmployeeController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            return Ok(db.Employees.ToList());
        }

        [HttpPost]

        public IActionResult AddEmployee(AddEmployeeDTO addEmployee)
        {
            var emp = new Employee()
            {
                Name = addEmployee.Name,
                Email = addEmployee.Email,
                Phone = addEmployee.Phone,
                Salary = addEmployee.Salary,
            };

                db.Employees.Add(emp);
                db.SaveChanges();
                return Ok(emp);
            
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(employee);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, UpdateEmployeeDTO updateEmployee)
        {
            var employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                employee.Name = updateEmployee.Name;
                employee.Email = updateEmployee.Email;
                employee.Phone = updateEmployee.Phone;
                employee.Salary = updateEmployee.Salary;
                db.Employees.Update(employee);
                db.SaveChanges();
                return Ok(employee);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                db.Employees.Remove(employee);
                db.SaveChanges();
                return Ok(employee);
            }
        }
    }
}
