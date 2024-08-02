import { Api } from "./app";

async function main(): Promise<void> {
    await Api.run(8080)
}

main();