document.addEventListener('DOMContentLoaded', () => {
    const devLogContainer = document.getElementById('dev-log-list-container');
    if (!devLogContainer) {
        return; // No dev log container on this page, so nothing to render.
    }

    // Get the project name from a data attribute if present on the container.
    // This will be used to filter logs for specific project pages.
    const projectName = devLogContainer.dataset.projectName;

    fetch('/dev-logs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(devLogs => {
            let filteredLogs = devLogs;
            if (projectName) {
                // If a project name is provided, filter logs for that specific project.
                filteredLogs = devLogs.filter(log => log.project === projectName);
            }

            // Sort logs by date in descending order (most recent first).
            filteredLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

            devLogContainer.innerHTML = ''; // Clear any existing content in the container.

            if (filteredLogs.length === 0) {
                devLogContainer.innerHTML = '<p>No dev logs found for this project yet.</p>';
                return;
            }

            filteredLogs.forEach(log => {
                const logEntryDiv = document.createElement('div');
                logEntryDiv.classList.add('log-list'); // Apply the existing CSS class for styling.

                const timeElement = document.createElement('time');
                timeElement.setAttribute('datetime', log.date);
                // Format date to "Month Day, Year" (e.g., "June 6, 2025").
                const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                timeElement.textContent = new Date(log.date).toLocaleDateString('en-US', dateOptions);

                const h3Element = document.createElement('h3');
                const aElement = document.createElement('a');
                aElement.setAttribute('href', log.link);
                aElement.textContent = log.title;
                h3Element.appendChild(aElement);

                logEntryDiv.appendChild(timeElement);
                logEntryDiv.appendChild(h3Element);
                devLogContainer.appendChild(logEntryDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching or rendering dev logs:', error);
            devLogContainer.innerHTML = '<p>Failed to load dev logs. Please try again later.</p>';
        });
});