function setTimeoutPromisified(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function main() {
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(2000);
    console.log("Hey there!");
    await setTimeoutPromisified(3000);
    console.log("Hello");
}

main();