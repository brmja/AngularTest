using api.ADO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace api.Service
{
    public class EmployeesService
    {
        EmployeesDBEntities Context = new EmployeesDBEntities();

        public List<Employee> GetAll()
        {
            return Context.Set<Employee>().ToList();
        }

        public Employee Get(int id)
        {
            return Context.Set<Employee>().Find(id);
        }

        public IQueryable GetTasks(int id)
        {
            var res = Context.Set<EmpTask>().Include(c => c.Task).Where(c => c.EmpId == id)
                .Select(x => new
                {
                    TaskName = x.Task.TaskName
                });

            return res;
        }

        public Employee Post(Employee Obj)
        {
            var res = Context.Employees.Add(Obj);
            Save();
            return res;
        }

        public Employee Put(Employee Obj)
        { 
            // assume Entity base class have an Id property for all items
            var entity = Context.Set<Employee>().Find(Obj.Id);
            
            Context.Entry(entity).CurrentValues.SetValues(Obj);
            Save();
            return Obj;
        }

        public void Save()
        {
            Context.SaveChanges();
        }
    }
}