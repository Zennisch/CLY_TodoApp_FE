export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface CreateTaskRequest {
    title: string;
    description: string;
}

export interface CreateTaskResponse {
    task: Task;
}

export interface UpdateTaskRequest {
    completed: boolean;
}

export interface UpdateTaskResponse {
    completed: boolean;
}

export interface GetTasksResponse {
    tasks: Task[];
}