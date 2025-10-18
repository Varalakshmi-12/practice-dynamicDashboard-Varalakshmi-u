import Greeting from './components/Greeting';
import ConditionalMessage from './components/ConditionalMessage';
import TaskList from './components/TaskList';




const DynamicDashboard = () => {
    const userName = 'Varalakshmi';
    const isPremiumUser = true;
    const taskList = [
        {
            taskName: "Learn HTML,CSS,JS,React",
            completed: true
        },
        {
            taskName: "Build a project",
            completed:false

        },
        {
            taskName: 'Project ideation,Planning',
            completed: true
        },
        {
            taskName: 'Start Coding',
            completed: false
        }
    ]

    return (
        <div>
            <h1>
                <Greeting name={userName} />
            </h1>

            <ConditionalMessage isPremiumUser={isPremiumUser} />
            <TaskList taskList={taskList} />


        </div>
    )
}

export default DynamicDashboard;