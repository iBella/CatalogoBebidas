using System.Collections.Generic;
using System.Linq;
using CatalogoApi.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace CatalogoApi.Services
{
    public class BebidaService
    {
        private readonly IMongoCollection<Bebida> _bebidas;

        public BebidaService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("CatalogoDb"));
            var database = client.GetDatabase("CatalogoDb");
            _bebidas = database.GetCollection<Bebida>("Bebidas");
        }

        public List<Bebida> Listar()
        {
            return _bebidas.Find(bebida => true).ToList();
        }

        public Bebida Listar(string id)
        {
            return _bebidas.Find<Bebida>(bebida => bebida.Id == id).FirstOrDefault();
        }

        public List<Bebida> ListarPor(string tipo)
        {
            return _bebidas.Find<Bebida>(bebida => bebida.Tipo == tipo).ToList();
        }

        public Bebida Cadastrar(Bebida bebida)
        {
            _bebidas.InsertOne(bebida);
            return bebida;
        }

        public void Editar(string id, Bebida bebidaNova)
        {
            _bebidas.ReplaceOne(bebida => bebida.Id == id, bebidaNova);
        }

        public void Remover(Bebida bebidaExcluida)
        {
            _bebidas.DeleteOne(book => book.Id == bebidaExcluida.Id);
        }

        public void Remover(string id)
        {
            _bebidas.DeleteOne(bebida => bebida.Id == id);
        }
    }
}