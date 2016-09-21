using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProductsService.Models
{
  public class Product
  {
    public int Id { get; set; }
    public string ProductName { get; set; }
    public string Description { get; set; }
    public decimal UnitPrice { get; set; }
    public string ImageUrl { get; set; }


  }
}