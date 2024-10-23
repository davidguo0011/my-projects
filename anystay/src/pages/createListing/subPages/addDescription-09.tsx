import { NewListingWriteTitleQuestionInputCount, NewListingWriteTitleQuestionInputTextarea, CreateListingAddAddressTitle, CreateListingNewListingQuestionWrapper } from "../createListingStyling";

interface AddDescriptionProps {
    propertyDescription: string;
    updatePropertyDescription: (propertyDescription: string) => void;
}

export default function AddDescription({ propertyDescription, updatePropertyDescription }: AddDescriptionProps) {
    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Write a description</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Write a description</CreateListingAddAddressTitle>

            <NewListingWriteTitleQuestionInputTextarea
                description={true}
                style={{ minHeight: "240px" }}
                placeholder="You can write anything about your place"
                rows={20}
                name="listingDescription"
                value={propertyDescription}
                onChange={(e) => updatePropertyDescription(e.target.value)}
                textAreaType={"description"}
            />
            <NewListingWriteTitleQuestionInputCount>{2500 - propertyDescription.trim().length}</NewListingWriteTitleQuestionInputCount>
        </CreateListingNewListingQuestionWrapper>
    );
}
