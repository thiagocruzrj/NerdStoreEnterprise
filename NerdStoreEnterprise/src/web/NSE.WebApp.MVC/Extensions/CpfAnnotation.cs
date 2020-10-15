using NSE.Core.DomainObjects;
using System.ComponentModel.DataAnnotations;

namespace NSE.WebApp.MVC.Extensions
{
    public class CpfAnnotation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext) =>
            Cpf.Validar(value.ToString()) ? ValidationResult.Success : new ValidationResult("Cpf em formato inválido");
    }
}