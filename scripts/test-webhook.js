(async function(){
  try {
    const url = 'https://ananya-telegram-bot.sivaprasath-shiva.workers.dev/telegram/webhook';
    const payload = {
      update_id: Date.now(),
      message: {
        message_id: 1,
        from: { id: 999999, is_bot: false, first_name: 'Tester' },
        chat: { id: 999999, type: 'private' },
        date: Math.floor(Date.now() / 1000),
        text: 'hello from test'
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-telegram-bot-api-secret-token': 'a1b2c3d4e5f60718293a4b5c6d7e8f90'
      },
      body: JSON.stringify(payload)
    });

    console.log('status', res.status);
    console.log(await res.text());
  } catch (err) {
    console.error(err);
  }
})();
