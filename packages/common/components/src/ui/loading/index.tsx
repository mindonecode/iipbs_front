import "./loading.css";

interface LoadingWithAnimationProps {
  color?: "primary" | "secondary";
}

const LoadingWithAnimation = ({
  color = "primary",
}: LoadingWithAnimationProps) => {
  return (
    <div className="loading loading-animation">
      <i className={`spinner ${color}`} />
    </div>
  );
};

interface LoadingWithImageProps {
  color?: "primary" | "secondary";
}

const LoadingWithImage = ({ color = "primary" }: LoadingWithImageProps) => {
  return (
    <div className="loading loading-image">
      <i className={`spinner ${color}`} />
    </div>
  );
};

export { LoadingWithAnimation, LoadingWithImage };
