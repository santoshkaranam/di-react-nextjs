import {useJpex} from 'react-jpex';

export default function getDiContainer(): any {
    const jpex = useJpex();
    jpex.constant<ILogger>('console', new ConsoleLogger());
    jpex.constant<ILogger>('null', new NullLogger());
}

export interface ILogger {
    Log(msg: string): void
}

export class ConsoleLogger implements ILogger {
    Log(msg: string): void {
        console.log(msg)
    }
}

export class NullLogger implements ILogger {
    Log(msg: string): void {
        //console.log(msg)
    }
}