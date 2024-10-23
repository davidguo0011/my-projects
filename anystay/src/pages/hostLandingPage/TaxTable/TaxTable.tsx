import {
    HostLandingContentWrapper,
    HostLandingComparisonTableWrapper,
    HostLandingComparisonTable,
    HostLandingComparisonTableTitle,
    HostLandingComparisonTableDivider,
    HostLandingComparisonTableText,
    HostLandingComparisonTableLogo,
    HostLandingComparisonTableSubtitle,
} from "../hostLandingPageStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

const TaxTable = () => {
    return (
        <HostLandingContentWrapper style={{ background: ColorTheme.White.color }}>
            <HostLandingComparisonTableWrapper>
                <HostLandingComparisonTable>
                    <HostLandingComparisonTableTitle style={{ gridRow: "1/2", gridColumn: "3/4" }}>Others</HostLandingComparisonTableTitle>
                    <HostLandingComparisonTableDivider style={{ gridRow: "1/2" }} />
                    <HostLandingComparisonTableText style={{ gridRow: "2/3", gridColumn: "1/2" }}>1 - 6 nights</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "2/3", gridColumn: "2/3" }}>13.5%</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "2/3", gridColumn: "3/4" }}>18%+</HostLandingComparisonTableText>
                    <HostLandingComparisonTableDivider style={{ gridRow: "2/3" }} />
                    <HostLandingComparisonTableLogo
                        src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+red.svg"}
                        alt={""}
                        style={{ gridRow: "1/2", gridColumn: "2/3" }}
                    />
                    <HostLandingComparisonTableText style={{ gridRow: "3/4", gridColumn: "1/2" }}>7 - 27 nights</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "3/4", gridColumn: "2/3" }}>11.5%</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "3/4", gridColumn: "3/4" }}>18%+</HostLandingComparisonTableText>
                    <HostLandingComparisonTableDivider style={{ gridRow: "3/4" }} />
                    <HostLandingComparisonTableText style={{ gridRow: "4/5", gridColumn: "1/2" }}>28+ nights</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "4/5", gridColumn: "2/3" }}>7.5%</HostLandingComparisonTableText>
                    <HostLandingComparisonTableText style={{ gridRow: "4/5", gridColumn: "3/4" }}>13%</HostLandingComparisonTableText>
                    {window.innerWidth >= 768 && <HostLandingComparisonTableDivider style={{ gridRow: "4/5" }} />}
                </HostLandingComparisonTable>
            </HostLandingComparisonTableWrapper>
            <HostLandingComparisonTableSubtitle>Single service fee deducted from your payout compared to other Australian providers.</HostLandingComparisonTableSubtitle>
        </HostLandingContentWrapper>
    );
};

export default TaxTable;
