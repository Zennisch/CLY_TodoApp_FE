import { useState, useEffect, useCallback } from "react";
import type { Task, CreateTaskRequest } from "../models/Task";
import { taskService } from "../services/TaskService";

interface UseTaskState {
	tasks: Task[];
	loading: boolean;
	error: string | null;
}

interface UseTaskActions {
	fetchTasks: () => Promise<void>;
	createTask: (taskData: CreateTaskRequest) => Promise<Task | null>;
	updateTask: (id: number, completed: boolean) => Promise<boolean | null>;
	deleteTask: (id: number) => Promise<boolean>;
	toggleTask: (id: number) => Promise<boolean | null>;
	clearError: () => void;
	refreshTasks: () => Promise<void>;
}

export interface UseTaskHook extends UseTaskState, UseTaskActions {}

// Trong hook này sử dụng rất nhiều useCallback để tránh việc tạo lại hàm mỗi lần render
// Từ đó giúp tối ưu hiệu suất của component sử dụng hook này

export const useTask = (): UseTaskHook => {
	const [state, setState] = useState<UseTaskState>({
		tasks: [],
		loading: false,
		error: null,
	});

	const updateState = useCallback((updates: Partial<UseTaskState>) => {
		setState((prev) => ({ ...prev, ...updates }));
	}, []);

	const clearError = useCallback(() => {
		updateState({ error: null });
	}, [updateState]);

	const fetchTasks = useCallback(async () => {
		try {
			updateState({ loading: true, error: null });
			const tasks = await taskService.getTasks();
			updateState({ tasks, loading: false });
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "Failed to fetch tasks";
			updateState({ loading: false, error: errorMessage });
			console.error("Error fetching tasks:", error);
		}
	}, [updateState]);

	const createTask = useCallback(
		async (taskData: CreateTaskRequest): Promise<Task | null> => {
			try {
				updateState({ loading: true, error: null });
				const newTask = await taskService.createTask(taskData);

				setState((prev) => ({
					...prev,
					tasks: [...prev.tasks, newTask],
					loading: false,
				}));

				return newTask;
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : "Failed to create task";
				updateState({ loading: false, error: errorMessage });
				console.error("Error creating task:", error);
				return null;
			}
		},
		[updateState],
	);

	const updateTask = useCallback(
		async (id: number, completed: boolean): Promise<boolean | null> => {
			try {
				updateState({ loading: true, error: null });
				const updatedCompleted = await taskService.updateTask(id, {
					completed,
				});

				setState((prev) => ({
					...prev,
					tasks: prev.tasks.map((task) =>
						task.id === id ? { ...task, completed: updatedCompleted } : task,
					),
					loading: false,
				}));

				return updatedCompleted;
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : "Failed to update task";
				updateState({ loading: false, error: errorMessage });
				console.error("Error updating task:", error);
				return null;
			}
		},
		[updateState],
	);

	const deleteTask = useCallback(
		async (id: number): Promise<boolean> => {
			try {
				updateState({ loading: true, error: null });
				await taskService.deleteTask(id);

				setState((prev) => ({
					...prev,
					tasks: prev.tasks.filter((task) => task.id !== id),
					loading: false,
				}));

				return true;
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : "Failed to delete task";
				updateState({ loading: false, error: errorMessage });
				console.error("Error deleting task:", error);
				return false;
			}
		},
		[updateState],
	);

	// Hàm hỗ trợ bật tắt trạng thái hoàn thành của task
	const toggleTask = useCallback(
		async (id: number): Promise<boolean | null> => {
			const task = state.tasks.find((t) => t.id === id);
			if (!task) {
				updateState({ error: "Task not found" });
				return null;
			}

			return updateTask(id, !task.completed);
		},
		[state.tasks, updateTask, updateState],
	);

	const refreshTasks = useCallback(() => fetchTasks(), [fetchTasks]);

	// Tự động tải danh sách task khi component mount
	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	return {
		// State
		tasks: state.tasks,
		loading: state.loading,
		error: state.error,

		// Actions
		fetchTasks,
		createTask,
		updateTask,
		deleteTask,
		toggleTask,
		clearError,
		refreshTasks,
	};
};
