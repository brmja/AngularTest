using api.ADO;
using api.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace api.Controllers
{
    [RoutePrefix("api/Employees")]
    public class EmployeesController : ApiController
    {
        EmployeesService RepoEmp = new EmployeesService();

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            var res = RepoEmp.GetAll();
            return Ok(res);
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById(int id)
        {
            var res = RepoEmp.Get(id);
            return Ok(res);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Employee Object)
        {
            var res = RepoEmp.Post(Object);
            return Ok(res);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put(Employee Object)
        {
            var res = RepoEmp.Put(Object);
            return Ok(res);
        }
	}
}