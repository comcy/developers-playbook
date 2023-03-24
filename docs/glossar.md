# Developers Glossar

[TOC]

### POCO

Simple objects holding only properties with intention to keep data.
Only `get()` and `set()`. No additional behavior.
No behavior
Choose good name for intentional use, e.g. 
- Model for `Projject`
- POCO: `ProjectViewModel`

Sample
```c#
public class ProductViewModel 
{
  public int ProductId { get; set; }
  public string Name { get; set; }
  public string Description { get; set; }
  public string ImageUrl { get; set; }
  public decimal UnitPrice { get; set; }
}
```


### 
