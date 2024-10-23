import React from "react";
import { Storage } from "aws-amplify";
import { useDropzone } from "react-dropzone";

// Imort styling
import {
    NewListingAddImagesQuestionWrapper,
    NewListingAddImagesQuestionTitle,
    NewListingAddImagesQuestionSubtitle,
    ImageUploadInputWrapper,
    CreateListingAddAddressTitle,
} from "../createListingStyling";

// Import components
import SortableWrapper from "../sortableWrapper";

interface ListingImage {
    key: string;
    alt: string;
    height: number | null;
    width: number | null;
    priority: number | null;
}

interface ImagesProps {
    images: ListingImage[];
    addImg: (imgKey: string, height: number | null, width: number | null) => Promise<void>;
    updateImages: (images: ListingImage[]) => Promise<void>;
    setIsImgUploading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddImages({ images, addImg, updateImages, setIsImgUploading }: ImagesProps) {
    return (
        <NewListingAddImagesQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Upload your photos</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Upload your photos</CreateListingAddAddressTitle>
            <NewListingAddImagesQuestionTitle>Add at least 8 photos</NewListingAddImagesQuestionTitle>
            <NewListingAddImagesQuestionSubtitle>You can edit or add more photos later.</NewListingAddImagesQuestionSubtitle>
            <CreateListingUpload images={images} addImg={addImg} updateImages={updateImages} setIsImgUploading={setIsImgUploading} />
        </NewListingAddImagesQuestionWrapper>
    );
}

function CreateListingUpload({ images, addImg, updateImages, setIsImgUploading }: ImagesProps) {
    function makeid(length: number) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

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
                            let generatedFileName = makeid(12);

                            if (!acceptedFileTypes.includes(file.type)) {
                                console.log("The uploaded file is not an accepted image type");
                                reject();
                                return;
                            }
                            try {
                                await Storage.put(generatedFileName, file, {
                                    contentType: file.type, // contentType is optional
                                }).then((res) => {
                                    addImg(res.key, (this as HTMLImageElement).height, (this as HTMLImageElement).width);
                                    resolve("successfully added");
                                });
                            } catch (error) {
                                console.log("Error uploading file: ", error);
                                reject();
                            }
                        };
                        img.src = e.target?.result as string;
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
                        let generatedFileName = makeid(12);

                        if (!acceptedFileTypes.includes(file.type)) {
                            console.log("The uploaded file is not an accepted image type");
                            reject();
                            return;
                        }

                        try {
                            await Storage.put(generatedFileName, file, {
                                contentType: file.type, // contentType is optional
                            }).then((res) => {
                                addImg(res.key, (this as HTMLImageElement).height, (this as HTMLImageElement).width);
                                resolve("successfully added");
                            });
                        } catch (error) {
                            console.log("Error uploading file: ", error);
                            reject();
                        }
                    };
                    img.src = e.target?.result as string;
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

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const handleFileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (hiddenFileInput.current) hiddenFileInput.current.click();
    };

    const updateItemOrder = (items: ListingImage[]) => {
        updateImages(items);
    };

    const removeItem = async (imgKey: string) => {
        let newListingPhotos = images.filter((e) => e.key !== imgKey);
        updateImages(newListingPhotos);
    };

    return (
        <>
            <ImageUploadInputWrapper {...getRootProps()} expanded={images.length === 0} onClick={handleFileClick}>
                <input
                    {...getInputProps()}
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    ref={hiddenFileInput}
                    onChange={onChange}
                    multiple={true}
                    accept="image/*"
                    onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                        (event.target as HTMLInputElement).value = "";
                    }}
                />
                <p className="new-listing-image-upload-input">Drop files or click to upload</p>
            </ImageUploadInputWrapper>
            {images && images.length > 0 && <SortableWrapper removeItem={removeItem} updateItemOrder={updateItemOrder} images={images} />}
        </>
    );
}
