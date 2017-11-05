using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC.Models;
using Microsoft.EntityFrameworkCore;
using PSC.ViewModels;

namespace PSC.Controllers
{
    [Produces("application/json")]
    [Route("api/Course")]
    public class CourseController : Controller
    {
        private readonly UniversityContext _context;

        public CourseController(UniversityContext context)
        {
            _context = context;
        }
        // GET: api/Course  
        [HttpGet]
        public async Task<IActionResult> CourseList()
        {
            List<Course_Subject> ilIst = new List<Course_Subject>();
            var listData = await (from emp in _context.Course
                                  join pro in _context.Subject on emp.CorsoId equals pro.CorsoId
                                  select new
                                  {
                                      emp.CorsoId,
                                      emp.Titolo,
                                      emp.DurataAnni,
                                      pro.Nome

                                  }
                          ).ToListAsync();
            listData.ForEach(x =>
            {
                Course_Subject Obj = new Course_Subject();
                Obj.CorsoId = x.CorsoId;
                Obj.Titolo = x.Titolo;
                Obj.DurataAnni = x.DurataAnni;
                Obj.Nome = x.Nome;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }

        [HttpPost]
        public IActionResult AddCourse([FromBody]Course empObj)
        {
            _context.Course.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }

        [HttpGet("{Empid}")]
        public async Task<IActionResult> CourseDetails(int Empid)
        {

            var CourseDetails = await (from emp in _context.Course
                                    join pro in _context.Subject on emp.CorsoId equals pro.CorsoId
                                    where emp.CorsoId == Empid
                                    select new
                                    {
                                        emp.CorsoId,
                                        emp.Titolo,
                                        emp.DurataAnni,
                                        pro.Nome
                                    }
                          ).FirstAsync();


            return Json(CourseDetails);
        }


    }
}