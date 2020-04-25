(() => {

    // Get button markup element
    const btn = document.querySelector('button')
    const code = document.querySelector('code')
    
    /**
     * Fetch a JSON file asynchronously
     * 
     * @param  {String} filepath path of the file to load
     * @returns {Promise} Promise Object represents the fetched data
     */
    const getData = async filepath => {
        const response = await fetch(filepath)
        const data = await response.json()
        return data
    }
    
    btn.addEventListener('click', async () => {
        try {
            const data = await getData('./data.json')
            code.innerHTML = JSON.stringify(data, null, ' ')
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            })
        } catch (error) {
            console.log('error fetching data')
        }
    })
    
})()