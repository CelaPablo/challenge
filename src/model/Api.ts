import { load } from 'ts-dotenv';
const env = load({ CANDIDATE_ID: String })

export class Api {
    private readonly apiURL: string;
    private readonly candidateId: string;
    maxRetries: number;
    retryDelayMs: number;

    constructor() {
        this.apiURL = "https://challenge.crossmint.io/api";
        this.candidateId = env.CANDIDATE_ID;
        this.maxRetries = 5;
        this.retryDelayMs = 1000;
    }

    async getGoal(): Promise<any> {
        const url = `${this.apiURL}/map/${this.candidateId}/goal`;
        try {
            const response = await fetch(url);
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async post(url: string, data: object) {
        let retries = 0;
        const postURL = `${this.apiURL}/${url}`;
        const postData = { ...data, candidateId: this.candidateId };
        
        while (retries < this.maxRetries) {
            try {
                const response = await fetch(postURL, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(postData)
                });

                if (response.status === 200) {
                    return response.json();
                }

                if (response.status === 429) {
                    await this.sleep();
                    retries++;
                } else {
                    throw new Error("Too many requests. Retrying after delay.");
                }
                
            } catch (error) {
                await this.sleep();
                retries++;
                console.log(error);
            }
        }
    }

    sleep(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, this.retryDelayMs));
    }
}
