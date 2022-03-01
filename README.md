
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/CihatKOCAK/to-do-app-redux.git
```

API dizinine gidin

```bash
  cd api
```

Gerekli paketleri yükleyin

```bash
  npm i
```

Sunucuyu çalıştırın

```bash
  npm run server
```

  client dizinine gidin

```bash
  cd client
```

Gerekli paketleri yükleyin

```bash
  yarn
```

Sunucuyu çalıştırın

```bash
  yarn start
```

## API Kullanımı

#### Tüm öğeleri getir

```http
  GET /todos
```


#### Öğe Ekle

```http
  POST /todos
```

|Title eklemeniz yeterli.|
|:----|


#### Öğe Güncelle 


```http
  PATCH /todos/id
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. id seçmeniz gerekli. |
| `completed`| `boolen` | aktif - pasif todo item durumu |




```http
  DELETE /todos/id
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. id eklemeniz yeterli. |

#### completed --> true | false