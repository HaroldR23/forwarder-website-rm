export type Service = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    sum_description?: string;
    features?: string[];
    image: string;
};
