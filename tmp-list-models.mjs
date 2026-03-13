async function run() {
    try {
        console.log("Fetching models...");
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyC_AeRh8o0USFdxV5Dp-8idwCUfGEcZMUI');
        const data = await response.json();
        const models = data.models ? data.models.map(m => m.name) : data;
        console.log(JSON.stringify(models, null, 2));
    } catch (e) {
        console.error(e);
    }
}
run();
