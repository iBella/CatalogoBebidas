using System.Collections.Generic;

namespace CatalogoApi.Infraestruturas
{
    public interface IInfra<T>
    {
        List<T> ListarTodas();
        T Listar(string id);
        List<T> ListaPor(string tipo);
        T Cadastrar(T bebida);
        T Editar(string id, T bebida);
        void Remover(string id);
    }
}
