import LoadingSpinnerIcon from "@/assets/loading-spinner.svg";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "md",
    className = ""
}) => {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <img
                src={LoadingSpinnerIcon}
                alt="Loading..."
                className={`animate-spin ${sizeClasses[size]}`}
            />
        </div>
    )
}
