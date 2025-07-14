# ContextForge

**Framework Low-Code de Contexto Universal para LLMs**

ContextForge permite **"llmizar"** qualquer fonte de dados na internet ou em sistemas internos — APIs, sites, documentos, bancos, imagens, áudios, vídeos — com **um único YAML** e comandos CLI.

---

## 🚀 Começando

Clone o repositório e instale dependências:

```bash
git clone https://github.com/usuario/contextforge.git
cd contextforge
npm install
```

Inicialize sua spec MCP e execute um prompt:

```bash
npx contextforge init --openapi spec.yaml
npx contextforge run --prompt "Resuma as últimas notícias"
```

---

## ⚙️ Principais Comandos

* **`init`**: gera o arquivo `mcp.yaml` a partir de OpenAPI, Postman, URLs, pastas de documentos ou banco de dados.
* **`generate`**: atualiza ou transforma fontes existentes em MCP padronizado.
* **`run`**: executa todo o pipeline RAG (ingestão, chunking, indexação e chamada ao LLM) com base no `mcp.yaml`.

---

## 📂 Exemplo de `mcp.yaml`

```yaml
context:
  sources:
    - type: api
      schema: openapi
      endpoints: ["/users"]
  transform:
    chunk_size: 500
    strategy: paragraph
    format: markdown
  vectorstore:
    type: local
    collection: demo
  injection:
    mode: preamble
    template: |
      ## Contexto:
      {{context}}
```

---

## 🌟 Por que ContextForge?

* **Universalidade Extrema**: suporta qualquer tipo de dado, de HTML a vídeos.
* **Low-Code**: configuração via YAML + CLI intuitiva.
* **Padrão MCP**: define um protocolo reutilizável para contextos dinâmicos.
* **RAG Automático**: pipeline integrado de ingestão, vetorização e geração.

---

## 📚 Documentação Completa

Para detalhes de arquitetura, especificação de MCP e contribuições, veja:

* `docs/architecture.md`
* `docs/mcp-spec.md`
* `CONTRIBUTING.md`

---

Contribua e faça parte da revolução em integração de dados para IA! 🚀

