using System.Web;
using System.Web.Mvc;

namespace Epic_Tic_Tac
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}