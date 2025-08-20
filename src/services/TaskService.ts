import axios from "axios";
import type { 
    Task, 
    CreateTaskRequest, 
    CreateTaskResponse, 
    UpdateTaskRequest, 
    UpdateTaskResponse, 
    GetTasksResponse 
} from "../models/Task";

export class TaskService {
    private readonly basePath = "/tasks";

    // POST /api/v1/tasks
    async createTask(taskData: CreateTaskRequest): Promise<Task> {
        try {
            const response = await axios.post<CreateTaskResponse>(this.basePath, taskData);
            return response.data.task;
        } catch (error) {
            console.error("Error creating task:", error);
            throw error;
        }
    }

    // GET /api/v1/tasks
    async getTasks(): Promise<Task[]> {
        try {
            const response = await axios.get<GetTasksResponse>(this.basePath);
            return response.data.tasks;
        } catch (error) {
            console.error("Error fetching tasks:", error);
            throw error;
        }
    }

    // PUT /api/v1/tasks/:id
    async updateTask(id: number, updateData: UpdateTaskRequest): Promise<boolean> {
        try {
            const response = await axios.put<UpdateTaskResponse>(`${this.basePath}/${id}`, updateData);
            return response.data.completed;
        } catch (error) {
            console.error(`Error updating task ${id}:`, error);
            throw error;
        }
    }

    // DELETE /api/v1/tasks/:id
    async deleteTask(id: number): Promise<void> {
        try {
            await axios.delete(`${this.basePath}/${id}`);
        } catch (error) {
            console.error(`Error deleting task ${id}:`, error);
            throw error;
        }
    }

    // Hàm hỗ trợ bật tắt trạng thái hoàn thành của task
    async toggleTaskCompletion(id: number, completed: boolean): Promise<boolean> {
        return this.updateTask(id, { completed });
    }
}

// Export singleton instance
export const taskService = new TaskService();
