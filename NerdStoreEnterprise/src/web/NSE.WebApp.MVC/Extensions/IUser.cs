using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace NSE.WebApp.MVC.Extensions
{
    public interface IUser
    {
        string Name { get; }
        Guid ObterUserId();
        string ObterUserEmail();
        string ObterUserToken();
        bool EstaAutenticado();
        bool PossuiRole(string role);
        IEnumerable<Claim> ObterClaims();
        HttpContext ObterHttpContext();
    }

    public class AspNetUser : IUser
    {
        private readonly IHttpContextAccessor _accessor;

        public AspNetUser(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        public string Name => throw new NotImplementedException();

        public bool EstaAutenticado()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Claim> ObterClaims()
        {
            throw new NotImplementedException();
        }

        public HttpContext ObterHttpContext()
        {
            throw new NotImplementedException();
        }

        public string ObterUserEmail()
        {
            throw new NotImplementedException();
        }

        public Guid ObterUserId()
        {
            throw new NotImplementedException();
        }

        public string ObterUserToken()
        {
            throw new NotImplementedException();
        }

        public bool PossuiRole(string role)
        {
            throw new NotImplementedException();
        }
    }
}
