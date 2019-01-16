import { UserCache } from './models/user-cache';
import { GraylogApi } from "./services/graylog-api.service";
import { CommanderStatic } from "commander";
import * as Bluebird from 'bluebird';
import { UserToken } from './models/user-token';
export declare class GrayCli {
    private readonly userDir;
    private readonly tokenFilename;
    private readonly cacheFilename;
    private readonly authHeaderFormat;
    messageIds: string[];
    cmdOptions: any;
    url: string;
    username: string;
    password: string;
    tokens: UserToken[];
    cache: UserCache;
    authHeader: string;
    constructor(cmdOptions: CommanderStatic);
    private callApi;
    private validateUrl;
    private validateRequired;
    private validatePassword;
    private normalizeUrl;
    collectInputs(): Promise<void>;
    start(): void;
    listStreams(graylogApi: GraylogApi): Bluebird<string>;
    private showError;
    showServerInfo(graylogApi: GraylogApi): Bluebird<void>;
    handleMessages(messages: any[], filter: string): Promise<any>;
}
