import { useState } from "react";
import type { CreateTaskRequest } from "../models/Task";
import { Modal } from "./Modal";
import { Input } from "./Input";
import { Button } from "./Button";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateTask: (taskData: CreateTaskRequest) => Promise<void>;
    loading?: boolean;
}

export const TaskModal: React.FC<TaskModalProps> = ({
    isOpen,
    onClose,
    onCreateTask,
    loading = false
}) => {
    const [formData, setFormData] = useState<CreateTaskRequest>({
        title: "",
        description: ""
    });
    const [errors, setErrors] = useState<{title?: string}>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Kiểm tra
        const newErrors: {title?: string} = {};
        if (!formData.title.trim()) {
            newErrors.title = "Tiêu đề là bắt buộc";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await onCreateTask({
                title: formData.title.trim(),
                description: formData.description.trim()
            });
            
            handleClose();
        } catch (error) {
            console.error("Error in form submission:", error);
        }
    };

    const handleInputChange = (field: keyof CreateTaskRequest) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleClose = () => {
        if (!loading) {
            setFormData({ title: "", description: "" });
            setErrors({});
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Tạo Task Mới">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Tiêu đề *"
                    placeholder="Nhập tiêu đề task..."
                    value={formData.title}
                    onChange={handleInputChange("title")}
                    error={errors.title}
                    fullWidth
                    disabled={loading}
                />
                
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mô tả
                    </label>
                    <textarea
                        placeholder="Nhập mô tả task (tùy chọn)..."
                        value={formData.description}
                        onChange={handleInputChange("description")}
                        disabled={loading}
                        rows={3}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        disabled={loading}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        loading={loading}
                        disabled={!formData.title.trim() || loading}
                        className="min-w-[120px]"
                    >
                        Tạo Task
                    </Button>
                </div>
            </form>
        </Modal>
    );
}