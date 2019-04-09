using System.Collections.Generic;
using CatalogoApi.Models;
using CatalogoApi.Infraestruturas;
using Microsoft.Extensions.Configuration;

namespace CatalogoApi.Services
{
    public class BebidaService : IBebidaService
    {
        private MongoDAO<Bebida> bebidaDAO;

        public BebidaService(IConfiguration config)
        {
            bebidaDAO = new MongoDAO<Bebida>(config, "CatalogoDb", "Bebidas");
        }

        public List<Bebida> Listar()
        {
            return bebidaDAO.ListarTodas();
        }

        public Bebida Listar(string id)
        {
            return bebidaDAO.Listar(id);
        }

        public List<Bebida> ListarPor(string tipo)
        {
            return bebidaDAO.ListaPor(tipo);
        }

        public Bebida Cadastrar(Bebida bebida)
        {
            return bebidaDAO.Cadastrar(bebida);
        }

        public Bebida Editar(string id, Bebida bebidaNova)
        {
            return bebidaDAO.Editar(id, bebidaNova);
        }

        public void Remover(string id)
        {
            bebidaDAO.Remover(id);
        }
    }
}