import { Fragment, useState } from "react";

export default function SearchListingPhoto({ imgKey }: { imgKey: string }) {
    const [imgLoading, setImgLoading] = useState(true);
    return (
        <Fragment>
            {imgKey && (
                <img
                    src={imgKey}
                    alt="Featured Listing"
                    style={{
                        display: imgLoading ? "none" : "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        gridColumn: "1/2",
                        gridRow: "1/2",
                    }}
                    onLoad={() => {
                        setImgLoading(false);
                    }}
                />
            )}
        </Fragment>
    );
}
