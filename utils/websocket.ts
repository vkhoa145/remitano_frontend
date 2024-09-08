
const server = process.env.NEXT_PUBLIC_WEBSOCKET_URL
// const ws = new WebSocket(`${server}/cable`)

export const connectWebsocket = () => {
  const ws = new WebSocket("ws://localhost:3020/cable")
  console.log('ws', ws)
  ws.onopen = () => {
    console.log('connect websocket')
    ws.send(
      JSON.stringify({
        command: 'subscribe',
        identifier: JSON.stringify({
          channel: 'VideoNotificationChannel'
        }),
      })
    )
  };


  ws.onmessage = (e) => {
    const data = JSON.parse(e.data)
    if (data.type === 'ping') return;
    if (data.type === 'welcome') return;
    if (data.type === 'confirm_subscription') return;

    const message = data.message
    console.log('video', message)
  }
}