export function sites() {
    const sitesList = document.getElementById('js-sites')
    const sitesFrame = document.getElementById('js-iframe')

    async function fetchData() {
        return await (await fetch('sites.json')).json()
    }

    function onSiteClick(site) {
        sitesFrame.src = site.url;
    }

    function render(data) {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = data.name;
        listItem.appendChild(button);
        sitesList.appendChild(listItem);
        button.addEventListener('click', () => {
            onSiteClick(data)
        })
    }

    fetchData().then((data => {
        data.forEach(item => {
            render(item)
        })
    }))
}