import { ExperienceItemWrapper, ExperienceItemCardSubTitle, ExperienceItemCardTitle, ExperienceItemIcon, ExperienceItemTextWrapper } from "./experienceItemStyle";

interface ExperienceItemProps {
    icon: string;
    title: string;
    subTitle: string;
    onClick: () => void;
}

export default function ExperienceItem({ icon, title, subTitle, onClick }: ExperienceItemProps) {
    return (
        <ExperienceItemWrapper onClick={onClick}>
            <ExperienceItemIcon src={icon} alt={title} />
            <ExperienceItemTextWrapper>
                <ExperienceItemCardTitle>{title}</ExperienceItemCardTitle>
                <ExperienceItemCardSubTitle>{subTitle}</ExperienceItemCardSubTitle>
            </ExperienceItemTextWrapper>
        </ExperienceItemWrapper>
    );
}
