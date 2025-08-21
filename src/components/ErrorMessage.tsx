import { Button } from "./Button";

interface ErrorMessageProps {
	message: string;
	onRetry?: () => void;
	onDismiss?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
	message,
	onRetry,
	onDismiss,
}) => {
	return (
		<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
			<div className="flex items-start">
				<div className="ml-3 flex-1">
					<h3 className="text-sm font-medium text-red-800">Có lỗi xảy ra</h3>
					<p className="mt-1 text-sm text-red-700">{message}</p>
				</div>
				<div className="ml-4 flex-shrink-0 flex space-x-2">
					{onRetry && (
						<Button
							variant="outline"
							size="sm"
							onClick={onRetry}
							className="text-red-600 border-red-200 hover:bg-red-50"
						>
							Thử lại
						</Button>
					)}
					{onDismiss && (
						<Button
							variant="outline"
							size="sm"
							onClick={onDismiss}
							className="text-red-600 border-red-200 hover:bg-red-50"
						>
							Đóng
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
