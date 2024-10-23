import { MouseEventHandler, ReactNode } from "react";
import { EditContentBtnCardSubTitle, EditContentBtnCardTextWrapper, EditContentBtnCardTitle, EditContentBtnCardWrapper } from "./editListingReusableComponentStyling";
import ImgComponent from "../../../components/imageComponent/ImgComponent";

interface EditContentBtnCardProps {
    withImg?: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    imgSrc?: string;
    withImgContent?: ReactNode;
    title?: string;
    subTitle?: string;
    textGap?: string;
    textCenter?: boolean;
}

const EditContentBtnCard = ({ ...props }: EditContentBtnCardProps) => {
    return (
        <EditContentBtnCardWrapper withImg={props.withImg} onClick={props.onClick}>
            {props.withImg && (
                <ImgComponent
                    hasImage={props.imgSrc ? true : false}
                    src={props.imgSrc ? props.imgSrc : "https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"}
                    alt={props.imgSrc ? "image" : "plus icon"}
                    width="110px"
                    hasBackground={props.imgSrc ? false : true}
                    noShadow={props.imgSrc ? false : true}
                />
            )}
            {props.withImgContent ? (
                props.withImgContent
            ) : (
                <EditContentBtnCardTextWrapper textGap={props.textGap} textCenter={props.textCenter}>
                    <EditContentBtnCardTitle>{props.title}</EditContentBtnCardTitle>
                    <EditContentBtnCardSubTitle textCenter={props.textCenter}>{props.subTitle}</EditContentBtnCardSubTitle>
                </EditContentBtnCardTextWrapper>
            )}
        </EditContentBtnCardWrapper>
    );
};

export default EditContentBtnCard;
