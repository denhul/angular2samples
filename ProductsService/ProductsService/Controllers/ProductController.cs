using ProductsService.Infrastructure;
using ProductsService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductsService.Controllers
{
  [CORSFilter]
  public class ProductController : ApiController
  {
    // GET: api/Product
    public IEnumerable<Product> Get()
    {
      return ProductRepository.Products;
    }

    // GET: api/Product/5
    public IHttpActionResult Get(int id)
    {
      var product = ProductRepository.Products.FirstOrDefault(p => p.Id == id);
      if (product == null) { return NotFound(); }

      return Ok(product);
    }

    // POST: api/Product
    public IHttpActionResult Post([FromBody]Product value)
    {
      value.Id = ProductRepository.Products.Count + 1;
      ProductRepository.Products.Add(value);
      return Created("/api/Product/" + value.Id, value);
    }

    
  }
}
