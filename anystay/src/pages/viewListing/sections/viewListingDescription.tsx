import { useState, Fragment } from "react";
import { ViewListingDescriptionWrapper, ViewListingDescriptionText, ViewListingReadMoreButton } from "../viewListingStyling";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";

export default function ViewListingDescription({ description }: { description: string }) {
    let [readMore, setReadMore] = useState(true);
    const isDesktopSize = useIsDesktopSize();

    const formatTextWithLineBreaks = (text: string) => {
        return text.split("\n").map((line, index) => (
            <Fragment key={index}>
                {line}
                <br />
            </Fragment>
        ));
    };

    return (
        <ViewListingDescriptionWrapper>
            {description !== "" && description !== null && (
                <ViewListingDescriptionText>
                    {readMore
                        ? isDesktopSize
                            ? description.length > 400
                                ? formatTextWithLineBreaks(description.slice(0, 400) + "...")
                                : formatTextWithLineBreaks(description)
                            : description.length > 200
                              ? formatTextWithLineBreaks(description.slice(0, 200) + "...")
                              : formatTextWithLineBreaks(description)
                        : formatTextWithLineBreaks(description)}
                    {isDesktopSize
                        ? description.length > 400 && (
                              <ViewListingReadMoreButton type="button" onClick={() => setReadMore(!readMore)}>
                                  {readMore ? "Read more" : "Read less"}
                              </ViewListingReadMoreButton>
                          )
                        : description.length > 200 && (
                              <ViewListingReadMoreButton type="button" onClick={() => setReadMore(!readMore)}>
                                  {readMore ? "Read more" : "Read less"}
                              </ViewListingReadMoreButton>
                          )}
                </ViewListingDescriptionText>
            )}
        </ViewListingDescriptionWrapper>
    );
}
