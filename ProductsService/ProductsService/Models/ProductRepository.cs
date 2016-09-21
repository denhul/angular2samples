using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProductsService.Models
{
  public class ProductRepository
  {
    public static List<Product> Products { get; } = new List<Product>
    {
      new Product { Id = 1, ProductName = "Queso de Cabrales", Description = @"Cabrales (Spanish: queso de Cabrales) is a blue cheese made in the artisan tradition by rural dairy farmers in Asturias, Spain. This cheese can be made from pure, unpasteurized cow’s milk or blended in the traditional manner with goat and/or sheep milk, which lends the cheese a stronger, more spicy flavor.
All of the milk used in the production of Cabrales must come exclusively from herds raised in a small zone of production in Asturias, in the mountains of the Picos de Europa.", ImageUrl = "/images/330px-Cabrales.jpg", UnitPrice = 23 },
      new Product { Id = 2, ProductName = "Konbu", Description = @"Kombu (昆布 konbu?) is edible kelp from the family Laminariaceae and is widely eaten in East Asia. It may also be referred to as konbu (Japanese), dashima (Korean: 다시마) or haidai (simplified Chinese: 海带; traditional Chinese: 海帶; pinyin: Hǎidài). Some edible kelps in the family Laminariaceae are not always called kombu, such as arame, kurome (ja) (Ecklonia kurome) or Macrocystis pyrifera. Most kombu is from the species Saccharina japonica (Laminaria japonica),[1] extensively cultivated on ropes in the seas of Japan and Korea. With the development of cultivation technology, over 90% of Japanese kombu is cultivated, mostly in Hokkaidō, but also as far south as the Seto Inland Sea.", ImageUrl = "/images/330px-Kombu.jpg", UnitPrice = 12 },
      new Product { Id = 3, ProductName = "Pavlova", Description = @"Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova. It is a meringue dessert with a crisp crust and soft, light inside, usually topped with fruit and, optionally, whipped cream. The name is pronounced /pævˈloʊvə/, unlike the name of the dancer, which was /ˈpɑːvləvə/.", ImageUrl = "/images/450px-Pavlova_dessert.jpg", UnitPrice = 35 },
      new Product { Id = 4, ProductName = "Sasquatch Ale", Description = "Sasquatch Ale is a Dark Ale brewed by: Six Rivers Brewery - California, United States ", ImageUrl = "/images/29501.jpg", UnitPrice = 2 },
      new Product { Id = 5, ProductName = "Tunnbröd", Description = @"Tunnbröd (literally ""thin bread"") is the Swedish version of flatbread and properly belongs to northern Swedish cuisine where housewives share a common bakery to produce it. Tunnbröd can be soft or crisp, and comes in many variants depending on choice of grain, leavening agent (or lack thereof) and rolling pin. The dough is made from any combination of wheat, barley and rye; the leavening agent can be both yeast and ammonium carbonate.", ImageUrl = "/images/375px-Tunnbröd-2007-07-14.jpg", UnitPrice = 1 },
      new Product { Id = 6, ProductName = "Lakkalikööri", Description = @"Lakka or Lakkalikööri is a liqueur produced in Finland which derives its flavor from the cloudberry fruit. The word ""Lakka"" means cloudberry in Finnish.", ImageUrl = "/images/330px-Lakka_Likör.jpg", UnitPrice = 40 },
      new Product { Id = 7, ProductName = "Thüringer Rostbratwurst", Description = @"Thuringian sausage, or in German Thüringer Rostbratwurst (short: Roster), is a unique sausage from the German state of Thuringia which has PGI status under EU law.", ImageUrl = "/images/330px-Thüringer_Rostbratwurst.jpg", UnitPrice = 123.79M },
      new Product { Id = 8, ProductName = "Côte de Blaye", Description = "Blaye is a wine region in Bordeaux, centred on the town of Blaye, producing both red and white wine, plus a small amount of rosé and sparkling wine. It is located on the right bank of the River Gironde, and surrounds Côtes de Bourg.", ImageUrl = "/images/375px-Cars,_Gironde.jpg", UnitPrice = 263.50M },
    };

  }
}