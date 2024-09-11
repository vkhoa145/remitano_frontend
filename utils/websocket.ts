
const server = process.env.NEXT_PUBLIC_WEBSOCKET_URL
const ws = new WebSocket(`${server}/cable`)

export const connectWebsocket = (onMessage: (data: any) => void) => {
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
    onMessage(message)
  }

  ws.onclose = () => {
    console.log('closing websocket.....')
  }

  ws.onerror = (e) => {
    console.log(e)
  }
  return ws;
}
