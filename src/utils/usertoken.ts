export class UserInfo {
    language: string;
    lastSignupTime: string;
    phone: string;
    token: string;
    constructor(data: any = {}) {
        this.language = data.language;
        this.lastSignupTime = data.lastSignupTime;
        this.phone = data.phone;
        this.token = data.token;
    }
}

export function getCachedToken() {
    let token = localStorage.getItem('MK_TOKEN');
    return token || 'unkown';
}
export function setCachedToken(token: string) {
    localStorage.setItem('MK_TOKEN', token);
}