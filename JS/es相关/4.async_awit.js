async function timeout(ms) {
    console.log('1---');
    await new Promise((resolve, reject) => { setTimeout(resolve, ms) });
    console.log('2---');
}

async function asyncprint(value, ms) {
    console.log('3----');
    await timeout(ms);
    console.log(value);
}

asyncprint("wuxueqin", 5000);