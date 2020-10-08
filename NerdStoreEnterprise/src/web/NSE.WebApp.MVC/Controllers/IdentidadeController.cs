using Microsoft.AspNetCore.Mvc;
using NSE.Identidade.API.Models;
using NSE.WebApp.MVC.Services;
using System.Threading.Tasks;

namespace NSE.WebApp.MVC.Controllers
{
    public class IdentidadeController : MainController
    {
        private readonly IAutenticacaoService _autenticacaoService;

        public IdentidadeController(IAutenticacaoService autenticacaoService)
        {
            _autenticacaoService = autenticacaoService;
        }

        [HttpGet]
        [Route("nova-conta")]
        public IActionResult Registro()
        {
            return View();
        }
            return RedirectToAction("Index", "Catalogo");
        }

    }
}
