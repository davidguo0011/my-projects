import {
    ViewListingExpandableSectionWrapper,
    ViewListingExpandableSectionTitle,
    ViewListingExpandableSectionSubtitle,
    ViewListingExpandableSectionContainer,
    ViewListingDamageDepositText,
    ViewListingDamageDepositLink,
} from "../viewListingStyling";

export default function ViewListingExpandableSection({ deposit }: { deposit: number }) {
    return (
        <ViewListingExpandableSectionContainer>
            <ViewListingExpandableSectionWrapper>
                <ViewListingExpandableSectionTitle>Safety & deposit</ViewListingExpandableSectionTitle>

                <ViewListingExpandableSectionSubtitle>
                    {deposit ? (
                        <ViewListingDamageDepositText>
                            <strong style={{ fontWeight: 575 }}>Your host may charge a ${Number(deposit / 100).toFixed(2)} deposit.</strong>
                            <br />
                            This is usually processed at check-in, your host will provide more information.{" "}
                            <ViewListingDamageDepositLink href="https://help.anystay.com.au/en/articles/7007403-deposits" target="_blank">
                                Learn more
                            </ViewListingDamageDepositLink>
                        </ViewListingDamageDepositText>
                    ) : (
                        <ViewListingDamageDepositText>
                            <strong style={{ fontWeight: 600 }}>No deposit.</strong> You don't have to pay a deposit. However, you may still be liable for damages. Your host will provide more
                            information.
                        </ViewListingDamageDepositText>
                    )}
                </ViewListingExpandableSectionSubtitle>
            </ViewListingExpandableSectionWrapper>
        </ViewListingExpandableSectionContainer>
    );
}
