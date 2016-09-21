using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;

namespace ProductsService.Infrastructure
{
  public class CORSFilterAttribute : ActionFilterAttribute
  {
    public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
    {
      base.OnActionExecuted(actionExecutedContext);
      var originHeader = actionExecutedContext.Request.Headers.GetValues("Origin").FirstOrDefault();
      actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Origin", originHeader);
    }
  }
}