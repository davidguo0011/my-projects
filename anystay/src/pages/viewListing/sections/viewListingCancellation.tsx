import {
    ViewListingExpandableSectionWrapper,
    ViewListingExpandableSectionTitle,
    ViewListingExpandableSectionSubtitle,
    ViewListingExpandableSectionContainerCancel,
    ViewListingDamageDepositText,
    ViewListingDamageDepositLink,
} from "../viewListingStyling";

export default function ViewListingExpandableCancellationSection({ cancellationPolicy, title }: { cancellationPolicy: string; title: string }) {
    let getText = () => {
        switch (cancellationPolicy) {
            case "flexible":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0 }}>
                        You will get a full refund of unspent nights minus service fee and cleaning fee if applied.{" "}
                        <ViewListingDamageDepositLink href="https://help.anystay.com.au/en/articles/7007340-cancellations" target="_blank">
                            Learn more
                        </ViewListingDamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            case "moderate":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0 }}>
                        You will get a 50% refund of unspent nights minus service fee and cleaning fee if applied.{" "}
                        <ViewListingDamageDepositLink href="https://help.anystay.com.au/en/articles/7007340-cancellations" target="_blank">
                            Learn more
                        </ViewListingDamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            case "strict":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0 }}>
                        If you cancel, you won’t be refunded except in an exceptional circumstance.{" "}
                        <ViewListingDamageDepositLink href="https://help.anystay.com.au/en/articles/7007340-cancellations" target="_blank">
                            Learn more
                        </ViewListingDamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            default:
                return "";
        }
    };

    return (
        <ViewListingExpandableSectionContainerCancel>
            <ViewListingExpandableSectionWrapper>
                <ViewListingExpandableSectionTitle>{title}</ViewListingExpandableSectionTitle>
            </ViewListingExpandableSectionWrapper>
            <ViewListingExpandableSectionSubtitle style={{ marginTop: "8px" }}>{getText()}</ViewListingExpandableSectionSubtitle>
        </ViewListingExpandableSectionContainerCancel>
    );
}
