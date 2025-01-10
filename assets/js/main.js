document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header');

    fetch('components/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch header');
            return response.text();
        })
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const container1Container = document.getElementById('container1');

    fetch('components/container1.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch header');
            return response.text();
        })
        .then(data => {
            container1Container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const container2Container = document.getElementById('container2');

    fetch('components/container2.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch header');
            return response.text();
        })
        .then(data => {
            container2Container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const container3Container = document.getElementById('container3');

    fetch('components/container3.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch header');
            return response.text();
        })
        .then(data => {
            container3Container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});


