using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CatalogoApi.Models
{
    public class Base
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Tipo")]
        public string Tipo { get; set; }
    }
}
