import type { Task } from "../models/Task";
import BookmarkIcon from "@/assets/bookmark.svg";
import CheckIcon from "@/assets/check.svg";
import ClockIcon from "@/assets/clock.svg";
import PercentIcon from "@/assets/percent.svg";

interface TaskStatsProps {
    tasks: Task[];
}

interface TaskStatsProps {
    tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const stats = [
        {
            label: "Tổng số",
            value: totalTasks,
            color: "bg-blue-500",
            icon: (
                <img src={BookmarkIcon} alt="Total Tasks" className="w-5 h-5" />
            )
        },
        {
            label: "Hoàn thành",
            value: completedTasks,
            color: "bg-green-500",
            icon: (
                <img src={CheckIcon} alt="Completed Tasks" className="w-5 h-5" />
            )
        },
        {
            label: "Chưa xong",
            value: pendingTasks,
            color: "bg-yellow-500",
            icon: (
                <img src={ClockIcon} alt="Pending Tasks" className="w-5 h-5" />
            )
        },
        {
            label: "Tiến độ",
            value: `${completionRate}%`,
            color: "bg-purple-500",
            icon: (
                <img src={PercentIcon} alt="Completion Rate" className="w-5 h-5" />
            )
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                        <div className={`${stat.color} text-white p-2 rounded-lg mr-3 flex-shrink-0`}>
                            {stat.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-600 truncate">{stat.label}</p>
                            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
