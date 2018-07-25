﻿import { HubConnection, TransportType, ConsoleLogger, LogLevel } from "@aspnet/signalr-client"
import { IHubClient, IBattleInfo, IBattleAction, IChunkState, } from "./IHubClient";

export class HubClient implements IHubClient {
    private hubConnection: HubConnection;
    private url: string;
    private token: string;

    constructor(url: string, token: string) {
        this.url = url;
        this.token = token;

        this.handleConnection();
    }

    private createConnection() {
        return new HubConnection(this.url + '?token=' + this.token, { transport: TransportType.WebSockets, logging: new ConsoleLogger(LogLevel.Information) });
    }

    private handleConnection() {
        this.hubConnection = this.createConnection();
        this.hubConnection.onclose(function (e) {
            this.handleConnection();
        });
        this.hubConnection.start().catch(function (e) {
            this.hubConnection();
        });
    }

    connect(): Promise<void> {
        return this.hubConnection.start();
    }
    disconnect(): void {
        this.hubConnection.stop();
    }
    getBattleInfo(): Promise<IBattleInfo> {
        throw new Error("Method not implemented.");
    }
    processAction(action: IBattleAction): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getChunkState(xIndex: number, yIndex: number): Promise<IChunkState> {
        throw new Error("Method not implemented.");
    }
    subscribeToChunk(xChunkIndex: number, yChunkIndex: number, callback: (...args: any[]) => void): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    unsubscribeFromChunk(xChunkIndex: number, yChunkIndex: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}