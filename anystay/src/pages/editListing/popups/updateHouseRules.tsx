import { useState } from "react";
import {
    EditListingUpdateCardTitleWrapper,
    EditListingUpdateCardTitle,
    EditListingUpdateCardAmenitiesWrapper,
    EditListingUpdateCardAmenitieWrapper,
    EditListingUpdateCardAmenitieTitle,
    EditListingUpdateCardAmenitieImage,
} from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

const houseRulesData = [
    { title: "No smoking", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+smoking.svg", styleProps: { justifySelf: "flex-end" } },
    { title: "No events", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+events.svg", styleProps: {} },
    { title: "No children", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+children.svg", styleProps: { justifySelf: "flex-end" } },
    { title: "No infants", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+infants.svg", styleProps: { justifySelf: "flex-end" } },
    { title: "No pets", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+pets.svg", styleProps: { justifySelf: "flex-end" } },
    { title: "Commercial use", src: "https://d292awxalydr86.cloudfront.net/House+rules+icons/Commercial+use.svg", styleProps: { justifySelf: "flex-end" } },
];

interface UpdateHouseRulesProps extends PopupProps {
    updateHouseRulesCard: boolean;
}

export default function UpdateHouseRules({ updateHouseRulesCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateHouseRulesProps) {
    const wrapperRef = useClickOutside(updateHouseRulesCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [houseRules, setHouseRules] = useState(listingData.houseRules);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const addHouseRule = async (houseRule: string) => {
        let houseRulesCopy = [...houseRules, houseRule];
        setHouseRules(houseRulesCopy);
    };

    const removeHouseRule = async (houseRule: string) => {
        let houseRulesCopy = [...houseRules];
        let newHouseRules = houseRulesCopy.filter((e) => e !== houseRule);
        setHouseRules(newHouseRules);
    };

    const updateHouseRules = async (houseRules: string[]) => {
        try {
            const updatedHouseRules = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/house-rules`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    houseRules: houseRules,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, houseRules: updatedHouseRules.body.listing.houseRules }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateHouseRules(houseRules);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardTitleWrapper style={{ marginTop: "8px" }}>
                <EditListingUpdateCardTitle style={{ marginLeft: 0 }}>House rules</EditListingUpdateCardTitle>
            </EditListingUpdateCardTitleWrapper>
            <EditListingUpdateCardAmenitiesWrapper>
                {houseRulesData.map((rule) => (
                    <EditListingHouseRule
                        key={rule.title}
                        houseRules={houseRules}
                        removeHouseRule={removeHouseRule}
                        addHouseRule={addHouseRule}
                        styleProps={rule.styleProps}
                        title={rule.title}
                        src={rule.src}
                    />
                ))}
            </EditListingUpdateCardAmenitiesWrapper>
        </GlobalPopupContainerRight>
    );
}

interface EditListingHouseRuleProps {
    src: string;
    title: string;
    houseRules: string[];
    styleProps: { justifySelf: string } | { justifySelf?: undefined };
    addHouseRule: (houseRule: string) => Promise<void>;
    removeHouseRule: (houseRule: string) => Promise<void>;
}

function EditListingHouseRule({ src, title, houseRules, styleProps, addHouseRule, removeHouseRule }: EditListingHouseRuleProps) {
    return (
        <EditListingUpdateCardAmenitieWrapper
            style={styleProps}
            onClick={() => {
                if (!houseRules.includes(title)) {
                    addHouseRule(title);
                } else {
                    removeHouseRule(title);
                }
            }}
            selected={houseRules.includes(title)}
        >
            <EditListingUpdateCardAmenitieImage src={src} alt="Amenitie icon" />
            <EditListingUpdateCardAmenitieTitle>{title}</EditListingUpdateCardAmenitieTitle>
        </EditListingUpdateCardAmenitieWrapper>
    );
}
