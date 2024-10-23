import { useState, useEffect } from "react";
import {
    NewListingAddServicesQuestionWrapper,
    NewListingMinimumStayOptionsWrapper,
    NewListingPriceQuestionInput,
    CreateListingAddAddressTitle,
    CreatListingPriceErrorMessage,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";
import { TextTheme, ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

interface NewListingPriceYourListingQuestionProps {
    minimumPrice: number;
    updateNightlyPrice: (minimumPrice: number) => void;
}

export default function NewListingPriceYourListingQuestion({ minimumPrice, updateNightlyPrice }: NewListingPriceYourListingQuestionProps) {
    const [belowMinimumPrice, setBelowMinimumPrice] = useState(false);
    const [aboveMaximumPrice, setAboveMaximumPrice] = useState(false);

    useEffect(() => {
        if (minimumPrice < 10) {
            setBelowMinimumPrice(true);
        } else if (minimumPrice > 100000) {
            setAboveMaximumPrice(true);
        } else {
            setBelowMinimumPrice(false);
            setAboveMaximumPrice(false);
        }
    }, [minimumPrice]);

    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Set your price</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Set your price</CreateListingAddAddressTitle>

            <NewListingMinimumStayOptionsWrapper style={{ gridTemplateColumns: "100%" }}>
                <div style={{ display: "flex", height: "110px", borderRadius: "10px", border: `1px solid ${ColorTheme.Grey1.color}`, alignItems: "center" }}>
                    <span
                        style={{ paddingLeft: "16px", fontWeight: TextTheme.sans_1000_semi.fontWeight, fontSize: TextTheme.sans_1000_semi.fontSize, lineHeight: TextTheme.sans_1000_semi.lineHeight }}
                    >
                        $
                    </span>
                    <NewListingPriceQuestionInput
                        type="text"
                        name="nightlyPrice"
                        placeholder={"100"}
                        value={minimumPrice}
                        onChange={(e) => {
                            let price = Number(e.target.value.replace(/\D/g, ""));
                            if (price.toString().length <= 6) {
                                updateNightlyPrice(price);
                            }
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
                {belowMinimumPrice && <CreatListingPriceErrorMessage>Price must be at least $10 AUD</CreatListingPriceErrorMessage>}
                {aboveMaximumPrice && <CreatListingPriceErrorMessage>Price must be below $100000 AUD</CreatListingPriceErrorMessage>}
            </NewListingMinimumStayOptionsWrapper>
        </CreateListingNewListingQuestionWrapper>
    );
}
