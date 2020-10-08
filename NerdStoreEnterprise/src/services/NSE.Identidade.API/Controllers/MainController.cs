using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace NSE.Identidade.API.Controllers
{
    [ApiController]
    public abstract class MainController : Controller
    {
        protected ICollection<string> Errors = new List<string>();

        protected ActionResult CustomResult(object result = null)
        {

        }

        protected bool OperacaoValida()
        {
            return !Errors.Any();
        }
    }
}