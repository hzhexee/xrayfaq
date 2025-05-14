---

title: Полезные команды
description: Список команд, которые могут пригодиться при работе с Remnawave.
---

### Просмотр логов XRay в ноде
:::caution
Эти команды относятся **только к [Remnanode](https://remna.st/docs/install/remnawave-node)**  и не работает на основной панели [Remnawave](https://remna.st/docs/install/remnawave-panel).
:::
#### Стандартный вывод (stdout)

```bash
docker exec -it remnanode tail -n +1 -f /var/log/supervisor/xray.out.log
```

#### Вывод ошибок (stderr)

```bash
docker exec -it remnanode tail -n +1 -f /var/log/supervisor/xray.err.log
```
