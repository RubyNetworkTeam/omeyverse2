type LogType = "WARN" | "ERROR" | "LOG" | "SUCCESS" | "INFO";

export class Logger {
    #format = (type: LogType) => {
        return `[Omeyverse][${type}][${new Date(Date.now()).toUTCString()}] `;
    }

    log(...message: any){
        console.log(this.#format("LOG"), ...message)
    }

    warn(...message: any){
        console.warn(this.#format("WARN"), ...message)
    }

    error(...message: any){
        console.error(this.#format("ERROR"), ...message);
    }

    info(...message: any){
        console.info(this.#format("INFO"), ...message);
    }

    success(...message: any){
        console.assert(this.#format("SUCCESS"), ...message);
    }
}