package towersim.tasks;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a circular list of tasks for an aircraft to cycle through.
 *
 * @ass1
 */
public class TaskList {
    /**
     * List of tasks to cycle through.
     */
    private final List<Task> tasks;
    /**
     * Index of current task in tasks list.
     */
    private int currentTaskIndex;

    /**
     * Creates a new TaskList with the given list of tasks.
     * <p>
     * Initially, the current task (as returned by {@link #getCurrentTask()}) should be the first
     * task in the given list.
     *
     * The list of tasks should be validated to ensure that it complies with the
     * rules for task ordering. If the given list is invalid,
     * an IllegalArgumentException should be thrown.
     * An empty task list is invalid.
     * Each task may only come immediately after a set of allowed tasks.
     *
     * @param tasks list of tasks
     * @throws IllegalArgumentException - if the given list of tasks is invalid
     * @ass1
     */
    public TaskList(List<Task> tasks) {
        this.tasks = tasks;
        this.currentTaskIndex = 0;
        if (this.tasks.size() == 0) {
            throw new IllegalArgumentException();
        }
        for (int i = 0; i < tasks.size(); i++) {
            TaskType currentTask = tasks.get(i).getType();
            TaskType nextTask;
            if (i < tasks.size() - 1) {
                nextTask = tasks.get(i + 1).getType();
            } else {
                nextTask = tasks.get(0).getType();
            }
            if (currentTask == TaskType.TAKEOFF && nextTask != TaskType.AWAY) {
                throw new IllegalArgumentException();
            } else if (
                    (currentTask == TaskType.AWAY && nextTask != TaskType.AWAY)
                            && (currentTask == TaskType.AWAY
                            && nextTask != TaskType.LAND)) {
                throw new IllegalArgumentException();
            } else if (
                    (currentTask == TaskType.LAND && nextTask != TaskType.WAIT)
                            && (currentTask == TaskType.LAND
                            && nextTask != TaskType.LOAD)) {
                throw new IllegalArgumentException();
            } else if (
                    (currentTask == TaskType.WAIT && nextTask != TaskType.WAIT)
                            && (currentTask == TaskType.WAIT
                            && nextTask != TaskType.LOAD)) {
                throw new IllegalArgumentException();
            } else if (currentTask == TaskType.LOAD
                    && nextTask != TaskType.TAKEOFF) {
                throw new IllegalArgumentException();
            }

        }
    }

    /**
     * Returns the current task in the list.
     *
     * @return current task
     * @ass1
     */
    public Task getCurrentTask() {
        return this.tasks.get(this.currentTaskIndex);
    }

    /**
     * Returns the task in the list that comes after the current task.
     * <p>
     * After calling this method, the current task should still be the same as it was before calling
     * the method.
     * <p>
     * Note that the list is treated as circular, so if the current task is the last in the list,
     * this method should return the first element of the list.
     *
     * @return next task
     * @ass1
     */
    public Task getNextTask() {
        int nextTaskIndex = (this.currentTaskIndex + 1) % this.tasks.size();
        return this.tasks.get(nextTaskIndex);
    }

    /**
     * Moves the reference to the current task forward by one in the circular task list.
     * <p>
     * After calling this method, the current task should be the next task in the circular list
     * after the "old" current task.
     * <p>
     * Note that the list is treated as circular, so if the current task is the last in the list,
     * the new current task should be the first element of the list.
     *
     * @ass1
     */
    public void moveToNextTask() {
        this.currentTaskIndex = (this.currentTaskIndex + 1) % this.tasks.size();
    }

    /**
     * Returns the human-readable string representation of this task list.
     * <p>
     * The format of the string to return is
     * <pre>TaskList currently on currentTask [taskNum/totalNumTasks]</pre>
     * where {@code currentTask} is the {@code toString()} representation of the current task as
     * returned by {@link Task#toString()},
     * {@code taskNum} is the place the current task occurs in the task list, and
     * {@code totalNumTasks} is the number of tasks in the task list.
     * <p>
     * For example, a task list with the list of tasks {@code [AWAY, LAND, WAIT, LOAD, TAKEOFF]}
     * which is currently on the {@code WAIT} task would have a string representation of
     * {@code "TaskList currently on WAIT [3/5]"}.
     *
     * @return string representation of this task list
     * @ass1
     */
    @Override
    public String toString() {
        return String.format("TaskList currently on %s [%d/%d]",
                this.getCurrentTask(),
                this.currentTaskIndex + 1,
                this.tasks.size());
    }

    /**
     * Returns the machine-readable string representation of this task list.
     * @return encoded string representation of this task list
     */
    public String encode() {
        String encodeMessage = "";
        for (int i = 0; i < tasks.size(); i++) {
            encodeMessage += (this.getCurrentTask().encode() + ",");
            this.moveToNextTask();
        }
        return encodeMessage.substring(0, encodeMessage.length() - 1);
    }
}
