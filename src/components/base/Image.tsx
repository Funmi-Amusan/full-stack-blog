import { IKImage } from "imagekitio-react";

const Image = ({
    path,
    className,
    alt
}: {
    path: string;
    className?: string;
    alt: string;
}) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL}
            path={path}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            className={className}
        />
    );
};

export default Image;
