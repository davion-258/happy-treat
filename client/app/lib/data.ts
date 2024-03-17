export async function fetchListReceipt(): Promise<string[]> {
    const BASE_API_URL = "http://localhost:8080/api"
    try {
        const response = await fetch(BASE_API_URL + "/list-receipt", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const receipts = response.json();
        console.log(receipts);
        return receipts as string[];
    } catch (e) {
        console.log(e);
        return [];
    }
}