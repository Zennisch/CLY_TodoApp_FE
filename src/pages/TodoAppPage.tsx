import { useState } from "react";
import { useTask } from "../hooks/useTask";
import type { CreateTaskRequest } from "../models/Task";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const TodoAppPage = () => {
	const {
		tasks,
		loading,
		error,
		createTask,
		toggleTask,
		deleteTask,
		clearError,
		refreshTasks,
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
		<div className="min-h-screen bg-gray-200">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						Todo App
					</h1>
					<p className="text-lg text-gray-600">
						Quản lý công việc một cách hiệu quả và thông minh
					</p>
				</div>

				<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
					<div className="p-4">
                        {loading && tasks.length === 0 ? (
                            <LoadingSpinner size="lg" />
                        ) : (
                            <></>
                        )}
                    </div>
				</div>

				{/* Footer Fixed*/}
				<div className="text-center mt-8 text-sm text-gray-500 fixed bottom-0 left-0 right-0 py-2">
					<p>© 2025 Todo App. Made by Zennisch using React & TypeScript</p>
				</div>
			</div>
		</div>
	);
};
