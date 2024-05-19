export class Logger {
    #format = (type) => {
        return `[Omeyverse][${type}][${new Date(Date.now()).toUTCString()}] `;
    };
    log(...message) {
        console.log(this.#format("LOG"), ...message);
    }
    warn(...message) {
        console.warn(this.#format("WARN"), ...message);
    }
    error(...message) {
        console.error(this.#format("ERROR"), ...message);
    }
    info(...message) {
        console.info(this.#format("INFO"), ...message);
    }
    success(...message) {
        console.assert(this.#format("SUCCESS"), ...message);
    }
}
