import { NewListingWriteTitleQuestionInputCount, NewListingWriteTitleQuestionInputTextarea, CreateListingAddAddressTitle, CreateListingNewListingQuestionWrapper } from "../createListingStyling";

interface NewListingWriteTitleQuestionProps {
    propertyTitle: string;
    updatePropertyTitle: (propertyTitle: string) => void;
}

export default function NewListingWriteTitleQuestion({ propertyTitle, updatePropertyTitle }: NewListingWriteTitleQuestionProps) {
    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Write a title</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Write a title</CreateListingAddAddressTitle>
            <NewListingWriteTitleQuestionInputTextarea
                description={false}
                placeholder="i.e. Stunning inner city unit next to river"
                name="listingTitle"
                value={propertyTitle}
                onChange={(e) => updatePropertyTitle(e.target.value)}
                textAreaType={"title"}
            />
            <NewListingWriteTitleQuestionInputCount>{50 - propertyTitle.trim().length}</NewListingWriteTitleQuestionInputCount>
        </CreateListingNewListingQuestionWrapper>
    );
}
