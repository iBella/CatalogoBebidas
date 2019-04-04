using System.Collections.Generic;
using CatalogoApi.Models;
using CatalogoApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CatalogoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BebidasController : ControllerBase
    {
        private readonly BebidaService _bebidaService;

        public BebidasController(BebidaService bebidaService)
        {
            _bebidaService = bebidaService;
        }

        [HttpGet]
        public ActionResult<List<Bebida>> Listar()
        {
            return _bebidaService.Listar();
        }

        [HttpGet("{id:length(24)}", Name = "ListarBebida")]
        public ActionResult<Bebida> Listar(string id)
        {
            var bebida = _bebidaService.Listar(id);

            if (bebida == null)
            {
                return NotFound();
            }

            return bebida;
        }

        [HttpGet("cervejas", Name = "ListarCervejas")]
        public ActionResult<List<Bebida>> ListarCervejas()
        {
            var bebida = _bebidaService.ListarPor("CERVEJA");

            if (bebida == null)
            {
                return NotFound();
            }

            return bebida;
        }

        [HttpGet("cachacas", Name = "ListarCachacas")]
        public ActionResult<List<Bebida>> ListarCachacas()
        {
            var bebida = _bebidaService.ListarPor("CACHACA");

            if (bebida == null)
            {
                return NotFound();
            }

            return bebida;
        }
        
        [HttpPost("cadastrar", Name = "Cadastrar")]
        public ActionResult<Bebida> Cadastrar(Bebida bebida)
        {
            _bebidaService.Cadastrar(bebida);

            if(bebida.Tipo == "CERVEJA"){
                return CreatedAtRoute("ListarCervejas", new { id = bebida.Id.ToString() }, bebida);
            }
            return CreatedAtRoute("ListarCachacas", new { id = bebida.Id.ToString() }, bebida);
        }

        [HttpPut("editar/{id:length(24)}", Name = "Editar")]
        public IActionResult Editar(string id, Bebida novaBebida)
        {
            var bebida = _bebidaService.Listar(id);

            if (bebida == null)
            {
                return NotFound();
            }

            _bebidaService.Editar(id, novaBebida);

            return CreatedAtRoute("ListarBebida", null, novaBebida);
        }

        [HttpDelete("remover/{id:length(24)}", Name = "Remover")]
        public IActionResult Remover(string id)
        {
            var bebida = _bebidaService.Listar(id);

            if (bebida == null)
            {
                return NotFound();
            }

            _bebidaService.Remover(bebida.Id);

            return NoContent();
        }
    }
}