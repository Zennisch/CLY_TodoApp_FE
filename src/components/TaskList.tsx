import type { Task } from "../models/Task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
	tasks: Task[];
	onToggleTask: (id: number) => void;
	onDeleteTask: (id: number) => void;
	loading?: boolean;
}

export const TaskList: React.FC<TaskListProps> = ({
	tasks,
	onToggleTask,
	onDeleteTask,
	loading = false,
}) => {
	if (tasks.length === 0) {
		return (
			<div className="text-center py-12">
				{/* Có thể thêm một biểu tượng hoặc hình ảnh ở đây */}
				<h3 className="text-lg font-medium text-gray-900 mb-2">
					Chưa có task nào
				</h3>
				<p className="text-gray-500">
					Tạo task đầu tiên để bắt đầu quản lý công việc của bạn!
				</p>
			</div>
		);
	}

    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                    loading={loading}
                />
            ))}
        </div>
    )
};
