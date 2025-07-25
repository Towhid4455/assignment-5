

const buttonGroups = [
    { selector: '.completeBtn1', task: 'Fix Mobile Button Issue' },
    { selector: '.completeBtn2', task: 'Add Dark Mode' },
    { selector: '.completeBtn3', task: 'Optimize Home page' },
    { selector: '.completeBtn4', task: 'Add new emoji 🤲' },
    { selector: '.completeBtn5', task: 'Integrate OpenAI API' },
    { selector: '.completeBtn6', task: 'Improve Job searching' },
];

const taskSpan = document.getElementById('task');
const doneSpan = document.getElementById('done');
const activityLog = document.getElementById('activityLog');
const clearBtn = document.getElementById('clearHistory');

let totalTasks = 0;
let taskCompleted = false;

buttonGroups.forEach((group, groupIndex) => {
    const buttons = document.querySelectorAll(group.selector);
    totalTasks += buttons.length;

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('clicked')) return;

            alert('Board Updated Successfully');

            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-white', 'text-black', 'border', 'border-gray-400', 'cursor-not-allowed');
            btn.disabled = true;
            btn.classList.add('clicked');

            let taskCount = parseInt(taskSpan.textContent);
            let doneCount = parseInt(doneSpan.textContent);
            taskSpan.textContent = taskCount > 0 ? taskCount - 1 : 0;
            doneSpan.textContent = doneCount + 1;

            if (activityLog.classList.contains('hidden')) {
                activityLog.classList.remove('hidden');
            }

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const message = `Task ${groupIndex + 1} ${group.task} completed at ${timeString}`;
            const logEntry = document.createElement('div');
            logEntry.textContent = message;
            logEntry.classList.add('bg-white', 'px-3', 'py-2', 'rounded', 'shadow');
            activityLog.appendChild(logEntry);

            const clickedCount = document.querySelectorAll('.clicked').length;
            if (clickedCount === totalTasks && !taskCompleted) {
                taskCompleted = true;
                alert("Congrats!!! You have completed all the current tasks");
            }
        });
    });
});

clearBtn.addEventListener('click', () => {
    activityLog.innerHTML = '';
    activityLog.classList.add('hidden');


});
