# First-Discord-Bot
Discord Bot developed in Node.js


**To do**: modularize code into different files for each command

## Features

1. `/ping`: returns latency
2. `/usd2ars` `val`: returns `val` conversion from USD to ARS according to [Infobae](https://www.infobae.com/economia/divisas/dolar-hoy/?gclid=Cj0KCQjwhY-aBhCUARIsALNIC06UkeYJoIJZX5M-6M2sI11hXw3O43tJuweL5fVExazamYk_2J2AZdsaAhYQEALw_wcB)
3. `/ars2usd` `val`: returns `val` conversion from ARS to USD according to Infobae.
4. `qr` `url`: generates qr from `url`


## Execution
create `config.json` wieh following syntax:

```json
    {
    "APP_ID": "Your App Id",
    "SERVER_ID": "Your Guild Id",
    "BOT_TOKEN": "Your Bot Token"
}
```

execute `deploy_commands.js` to configure commands in Discord server:

`node deploy_commands` only do it once (or when modified).

execute `index.js` to run bot:

`node index.js`