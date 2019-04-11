using CatalogoApi.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace CatalogoApi.Infraestruturas
{
    public class MongoBD<T> : IInfra<T> where T : Base
    {
        private MongoClient Client;
        private IMongoCollection<T> _collection;

        public MongoBD(IConfiguration config, string database, string collection)
        {
            Conexao(config.GetConnectionString(database));
            Database(database, collection);
        }

        private void Conexao(string config)
        {
            Client = new MongoClient(config);
        }

        private void Database(string database, string collection)
        {
            _collection = Client.GetDatabase(database).GetCollection<T>(collection);
        }
        
        public List<T> ListarTodas()
        {
            return _collection.Find(objeto => true).ToList();
        }

        public T Listar(string id)
        {
            return _collection.Find<T>(objeto => objeto.Id == id).FirstOrDefault();
        }

        public List<T> ListaPor(string tipo)
        {
            return _collection.Find<T>(objeto => objeto.Tipo == tipo).ToList();
        }

        public T Cadastrar(T objeto)
        {
            _collection.InsertOne(objeto);
            return objeto;
        }

        public T Editar(string id, T objetoEditado)
        {
            _collection.ReplaceOne(objeto => objeto.Id == id, objetoEditado);
            return objetoEditado;
        }

        public void Remover(string id)
        {
            _collection.DeleteOne(objeto => objeto.Id == id);
        }
    }
}
