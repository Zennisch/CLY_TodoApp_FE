import { useState } from "react";
import { useTask } from "../hooks/useTask";
import type { CreateTaskRequest } from "../models/Task";

export const TodoAppPage = () => {
    const { 
        tasks, 
        loading, 
        error, 
        createTask, 
        toggleTask, 
        deleteTask, 
        clearError, 
        refreshTasks 
    } = useTask();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateTask = async (taskData: CreateTaskRequest) => {
        await createTask(taskData);
    };

    const handleToggleTask = async (id: number) => {
        await toggleTask(id);
    };

    const handleDeleteTask = async (id: number) => {
        await deleteTask(id);
    };

    return (
        <></>
    )
}