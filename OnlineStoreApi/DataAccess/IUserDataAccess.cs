using OnlineStoreApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace OnlineStoreApi.DataAccess
{
    interface IUserDataAccess
    {
        Task<List<User>> GetUsers();
    }
}
