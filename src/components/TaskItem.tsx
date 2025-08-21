import type { Task } from "../models/Task";
import { Checkbox } from "./Checkbox";
import DeleteIcon from "@/assets/delete.svg";

interface TaskItemProps {
	task: Task;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
	loading?: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
	task,
	onToggle,
	onDelete,
	loading = false,
}) => {
	return (
		<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
			<div className="flex items-start justify-between gap-3">
				<div className="flex items-start gap-3 flex-1 min-w-0">
					<div className="mt-1">
						<Checkbox
							id={`task-${task.id}`}
							checked={task.completed}
							onChange={() => onToggle(task.id)}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<h3
							className={`text-base font-medium break-words ${
								task.completed ? "text-gray-500 line-through" : "text-gray-900"
							}`}
						>
							{task.title}
						</h3>
						{task.description && (
							<p
								className={`mt-1 text-sm break-words ${
									task.completed
										? "text-gray-400 line-through"
										: "text-gray-600"
								}`}
							>
								{task.description}
							</p>
						)}
					</div>
				</div>
				<div className="flex-shrink-0">
					<button
						onClick={() => onDelete(task.id)}
						disabled={loading}
						className="p-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
						title="Xóa task"
					>
						<img src={DeleteIcon} alt="Delete Task" className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
};
