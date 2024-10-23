const constructOptimisedProtectedImageUrl = (imgKey: string, identityId: string, width: number | null): string => {
    //bucket name
    //api endpoint
    const imageRequest = JSON.stringify({
        bucket: `${process.env.REACT_APP_IMAGE_BUCKET_NAME}`,
        key: `protected/${identityId}/${imgKey}`,
        edits: {
            resize: {
                width: width,
                fit: "cover",
            },
        },
    });
    const encodedObject = btoa(imageRequest);
    const url = `https://d2x27wzwb18st4.cloudfront.net/${encodedObject}`;
    return url;
};

export default constructOptimisedProtectedImageUrl;
