import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Storage } from "aws-amplify";
import { callApi } from "../../../utils/api/api";
// Import styling
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUploadWrapper,
    ImageUploadInputWrapper,
    EditListingUpdatePhotoContentWrapper,
} from "../editListingStyling";

// Import components
import SortableWrapper from "../sortableWrapper";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";

interface UpdatePhotosProps extends PopupProps {
    updatePhotosCard: boolean;
}

export interface ListingPhotoInterface {
    alt?: string;
    height?: number;
    key: string;
    priority?: number | null;
    width?: number;
}

export default function UpdatePhotos({ updatePhotosCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdatePhotosProps) {
    const wrapperRef = useClickOutside(updatePhotosCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [listingPhotos, setListingPhotos] = useState<ListingPhotoInterface[]>(listingData.listingImages.map((e) => JSON.parse(e as string)));
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [isImgUploading, setIsImgUploading] = useState(false);
    const addImgKey = (imgKey: string, height: number, width: number) => {
        setListingPhotos((prestate) => {
            return [
                ...prestate,
                {
                    key: imgKey,
                    alt: "",
                    height: height,
                    width: width,
                    priority: null,
                },
            ];
        });
    };
    const updateItemOrder = (items: ListingPhotoInterface[]) => {
        setListingPhotos(items);
    };

    const removeItem = async (imgKey: string) => {
        let newListingPhotos = listingPhotos.filter((e) => e.key !== imgKey);
        setListingPhotos(newListingPhotos);
    };

    const updatePhotos = async (listingImages: string[]) => {
        try {
            const updatedImages = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/images`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    listingImages: listingImages,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, listingImages: updatedImages.body.listing.listingImages }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updatePhotos(listingPhotos.map((e) => JSON.stringify(e)));
    };

    const isDesktopSize = useIsDesktopSize();

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={listingPhotos.length < 8 || listingPhotos.length > 100 || isContinueBtnLoading || isImgUploading}
            isContinueBtnLoading={isContinueBtnLoading}
            style={isDesktopSize ? { height: "100%" } : { height: "98%" }}
        >
            <EditListingUpdatePhotoContentWrapper>
                <EditListingUpdateCardContentTitle>Photos</EditListingUpdateCardContentTitle>
                <EditListingUpdateCardContentSubtitle style={{ marginBottom: "32px" }} invalid={false}>
                    Upload at least 8 photos. You can add as many as you want.
                </EditListingUpdateCardContentSubtitle>
                <EditListingUploadWrapper>
                    <EditListingUpload addImgKey={addImgKey} setIsImgUploading={setIsImgUploading} />
                    {listingPhotos && listingPhotos.length > 0 && <SortableWrapper removeItem={removeItem} updateItemOrder={updateItemOrder} items={listingPhotos} />}
                </EditListingUploadWrapper>
            </EditListingUpdatePhotoContentWrapper>
        </GlobalPopupContainerRight>
    );
}

function EditListingUpload({ addImgKey, setIsImgUploading }: { addImgKey: (imgKey: string, height: number, width: number) => void; setIsImgUploading: React.Dispatch<React.SetStateAction<boolean>> }) {
    const makeid = (length: number) => {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png", "image/apng", "image/heic", "image/avif", "image/webp"];
        setIsImgUploading(true);
        if (files) {
            const promises = Object.keys(files).map(function (fileName, index) {
                return new Promise((resolve, reject) => {
                    let file = files[fileName as keyof typeof files] as File;
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let img = new Image();
                        img.onload = async function () {
                            // console.log(`Image width: ${this.width}, Image height: ${this.height}`);
                            let generatedFileName = makeid(12);

                            if (!acceptedFileTypes.includes(file.type)) {
                                console.log("The uploaded file is not an accepted image type");
                                reject();
                                return;
                            }
                            try {
                                // console.log(file)
                                await Storage.put(generatedFileName, file, {
                                    contentType: file.type, // contentType is optional
                                }).then((res) => {
                                    addImgKey(res.key, (this as HTMLImageElement).height, (this as HTMLImageElement).width);
                                    resolve("updated");
                                });
                            } catch (error) {
                                console.log("Error uploading file: ", error);
                                reject();
                            }
                        };
                        if (e.target) {
                            img.src = e.target.result as string;
                        }
                    };
                    reader.readAsDataURL(file);
                });
            });
            try {
                await Promise.all(promises);
                setIsImgUploading(false);
                console.log("All files processed successfully");
            } catch (error) {
                setIsImgUploading(false);
                console.log("Error processing files:", error);
            }
        }
    };

    const onDrop = async (acceptedFiles: File[]) => {
        const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png", "image/apng", "image/heic", "image/avif", "image/webp"];
        setIsImgUploading(true);

        const promises = Object.keys(acceptedFiles).map(async function (fileName, index) {
            return new Promise((resolve, reject) => {
                let file = acceptedFiles[fileName as keyof typeof acceptedFiles] as File;
                let reader = new FileReader();
                reader.onload = function (e) {
                    let img = new Image();
                    img.onload = async function () {
                        // console.log(`Image width: ${this.width}, Image height: ${this.height}`);
                        let generatedFileName = makeid(12);

                        if (!acceptedFileTypes.includes(file.type)) {
                            console.log("The uploaded file is not an accepted image type");
                            reject();
                            return;
                        }

                        try {
                            // console.log(file)
                            await Storage.put(generatedFileName, file, {
                                contentType: file.type, // contentType is optional
                            }).then((res) => {
                                addImgKey(res.key, (this as HTMLImageElement).height, (this as HTMLImageElement).width);
                                resolve("updated");
                            });
                        } catch (error) {
                            console.log("Error uploading file: ", error);
                            reject();
                        }
                    };
                    if (e.target) {
                        img.src = e.target.result as string;
                    }
                };
                reader.readAsDataURL(file);
            });
        });
        try {
            await Promise.all(promises);
            setIsImgUploading(false);
            console.log("All files processed successfully");
        } catch (error) {
            setIsImgUploading(false);
            console.log("Error processing files:", error);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleFileClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };

    return (
        <>
            <ImageUploadInputWrapper {...getRootProps()} onClick={handleFileClick}>
                <input
                    {...getInputProps()}
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    ref={hiddenFileInput}
                    onChange={onChange}
                    multiple={true}
                    accept="image/*"
                    onClick={(event) => {
                        (event.target as HTMLInputElement).value = "";
                    }}
                />
                <p className="new-listing-image-upload-input">Drop files or click to upload</p>
            </ImageUploadInputWrapper>
        </>
    );
}
