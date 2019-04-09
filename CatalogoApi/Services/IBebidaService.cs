using CatalogoApi.Models;
using System.Collections.Generic;

namespace CatalogoApi.Services
{
    public interface IBebidaService
    {
        List<Bebida> Listar();
        Bebida Listar(string id);
        List<Bebida> ListarPor(string tipo);
        Bebida Cadastrar(Bebida bebida);
        Bebida Editar(string id, Bebida bebidaNova);
        void Remover(string id);
    }
}
