using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CatalogoApi.Models
{
    public class Bebida : Base
    {
        [BsonElement("Nome")]
        public string Nome { get; set; }

        [BsonElement("Descricao")]
        public string Descricao { get; set; }

        [BsonElement("Preco")]
        public decimal Preco { get; set; }

        [BsonElement("Teor")]
        public decimal Teor { get; set; }

        [BsonElement("Quantidade")]
        public decimal Quantidade { get; set; }

        [BsonElement("Imagem")]
        public string Imagem { get; set; }

        [BsonElement("Cor")]
        public string Cor { get; set; }

        [BsonElement("Madeira")]
        public string Madeira { get; set; }

        [BsonElement("Estilo")]
        public string Estilo { get; set; }
    }
}