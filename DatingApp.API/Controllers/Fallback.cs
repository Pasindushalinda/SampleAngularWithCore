using System.IO;
using Microsoft.AspNetCore.Mvc;
namespace DatingApp.API.Controllers
{
    public class Fallback : Controller
    {
        public IActionResult Index(){
            return PhysicalFile(Path.Combined(Directory.GetCurrentDirectory(),"wwwroot","index.html"),"text/HTML");
        }
    }
}