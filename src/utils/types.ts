import exp from "constants";

export interface Scale {
    id: number;
    name: string;
    notes: string[];
}

export interface RootNote {
    name: string;
    scales: Scale[];
}
export interface CardContainerProps {
    className: string;
}
export interface CardProps {
    imageUrl: string;
}
export interface FrontCardProps extends CardProps {
    rootNote: RootNote;
    scale: Scale;
}
export interface BackfrontCardProps extends CardProps  {}

export interface StartingCardProps extends CardProps  {}

export interface scaleData {
    name: string;
    scales: Scale[];
}