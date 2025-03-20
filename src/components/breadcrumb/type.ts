export interface IBreadcrumProps {
    items: Array<{
        text: string;
        link: string;
    } | string>;
}