---
title: Deeplink для proxy клиентов
description: Сборник всех deeplink'ов для популярных прокси клиентов
---

## Переменные

- `SUB_URL` = это ваша ссылка на подписку вида `https://sub.page.com/xxxxxx`
- `NAME` = название которые будет в заголовке подписки `BESTVPNEVER`

---

## Streisand

```bash
streisand://import/SUB_URL#NAME
```

## Karing

```bash
karing://install-config?url=SUB_URL&name=NAME
```

## FoxRay

```bash
foxray://yiguo.dev/sub/add/?url=SUB_URL#NAME
```

## V2box

```bash
v2box://install-sub?url=SUB_URL&name=NAME
```

## SingBox

```bash
sing-box://import-remote-profile?url=SUB_URL#NAME
```

## ShadowRocket

```bash
sub://SUB_URL
```

## Happ

```bash
happ://add/SUB_URL
```

## NekoRay

```bash
sn://subscription?url=SUB_URL&name=NAME
```

## V2rayNG

```bash
  v2rayng://install-sub?url=SUB_URL&name=NAME
```

- Начиная с версии 1.8.28:

```bash
 v2rayng://install-sub/?url=urlencode(SUB_URL)%23NAME
```

## ClashX

```bash
clashx://install-config?url=SUB_URL
```

## Clash

```bash
clash://install-config?url=SUB_URL
```

## FlClash

```bash
flclash://install-config?url=SUB_URL
```

## Hiddify

```bash
hiddify://install-config/?url=SUB_URL
```

## Happ

В happ есть парочку новых переменных

- `ROUTING_BASE64` = это закодированный в роутинг для хапп. Чтобы его создать перейдтие по ссылке [routing](https://routing.happ.su/)
- `CRYPTO_SUB` = зашифрованная ссылка, ее нельзя просматривать и редактировать. Получить ее можно [тут](https://www.happ.su/main/ru/dev-docs/crypto-link). Обратите внмание, что там 2 разных ввида deeplink в зависимости от длинны вашей подписки.

### Роутинг - пока только на телефоны или macos m1+

```bash
happ://routing/add/{ROUTING_BASE64}
```

```bash
happ://routing/onadd/{ROUTING_BASE64}
```

```bash
happ://routing/off
```

### Запуск VPN

```bash
happ://connect
```

```bash
happ://open
```

### Остановка VPN

```bash
happ://disconnect
```

```bash
happ://close
```

### Переключение VPN (был вкл, станет выкл и обратно)

```bash
happ://toggle
```

### Добавить сервер

```bash
happ://add/{SUB_URL}
```

```bash
happ://crypto/{CRYPTO_SUB}
```

```bash
happ://crypto2/{CRYPTO_SUB} ( отличие только в размере ключа )
```
