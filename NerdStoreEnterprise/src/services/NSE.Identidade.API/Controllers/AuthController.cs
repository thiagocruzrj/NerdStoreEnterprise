using Microsoft.AspNetCore.Mvc;
using NSE.Identidade.API.Models;
using System.Threading.Tasks;

namespace NSE.Identidade.API.Controllers
{
    public class AuthController : Controller
    {
        public async Task<ActionResult> Registrar(UsuarioRegistro usuarioRegistro)
        {

        }

        public async Task<ActionResult> Registrar(UsuarioLogin usuarioLogin)
        {

        }
    }
}