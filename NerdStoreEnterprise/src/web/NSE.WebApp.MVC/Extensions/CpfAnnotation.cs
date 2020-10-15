using Microsoft.AspNetCore.Mvc.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.Extensions.Localization;
using NSE.Core.DomainObjects;
using System;
using System.ComponentModel.DataAnnotations;

namespace NSE.WebApp.MVC.Extensions
{
    public class CpfAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext) =>
            Cpf.Validar(value.ToString()) ? ValidationResult.Success : new ValidationResult("Cpf em formato inválido");
    }

    public class CpfAttributeAdapter : AttributeAdapterBase<CpfAttribute>
    {
        public CpfAttributeAdapter(CpfAttribute attribute, IStringLocalizer stringLocalizer) : base(attribute, stringLocalizer) { }
        public override void AddValidation(ClientModelValidationContext context)
        {
            if (context == null)
                throw new ArgumentNullException(nameof(context));

            MergeAttribute(context.Attributes, "data-val", "true");
            MergeAttribute(context.Attributes, "data-val-cpf", GetErrorMessage(context));
        }

        public override string GetErrorMessage(ModelValidationContextBase validationContext) => "CPF em formato inválido";
    }
}