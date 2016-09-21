using ProductsService.Infrastructure;
using System.Web;
using System.Web.Mvc;

namespace ProductsService
{
  public class FilterConfig
  {
    public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    {
      filters.Add(new HandleErrorAttribute());
    }
  }
}
