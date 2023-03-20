### Para usar o MongoDB no Deno, você pode seguir os seguintes passos:

1. Instale o runtime Deno em seu sistema, se ainda não o tiver feito.

2. Importe o módulo MongoDB do repositório de módulos do Deno em seu código. Isso pode ser feito adicionando a seguinte linha no início do seu código:

```bash
  import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
```

3. Crie uma nova instância da classe MongoClient, que é a classe principal do módulo MongoDB. Isso pode ser feito adicionando a seguinte linha em seu código:

```bash
const client = new MongoClient();
```

4. Use o método `client.connect()` para se conectar ao banco de dados MongoDB. Isso pode ser feito adicionando a seguinte linha em seu código:

```bash
const db = await client.connect(DB_HOST);
```

O argumento `DB_HOST` é uma string que contém o endereço do host do banco de dados. Por exemplo:

```bash
const DB_HOST = "mongodb://localhost:27017";
```

5. Agora que você está conectado ao banco de dados, pode usar os métodos disponíveis no objeto `db` para acessar e manipular os dados armazenados no banco de dad
