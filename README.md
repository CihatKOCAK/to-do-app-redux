
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