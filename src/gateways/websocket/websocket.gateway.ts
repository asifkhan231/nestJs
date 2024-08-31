import { SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io'

@WebSocketGateway()
export class WebsocketsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect  {
  private clients: Set<Socket> = new Set();

  // @WebSocketGateway()
  server:Server;

  afterInit(server: Server) {
    console.log('communication is being initialized')
  }

  
  handleConnection(client: Socket) {
    console.log(`client connected: ${client.id}`)
    this.clients.add(client)
  }
  handleDisconnect(client: any) {
    console.log(`client disconnected: ${client.id}`)
    this.clients.delete(client)
  }
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): void {
    console.log(`massege from ${client.id} : ${payload}`)
    this.server.emit('messageToClient',payload)
  }
}
