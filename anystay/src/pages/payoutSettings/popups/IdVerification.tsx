import { useState, useRef, useCallback } from "react";
import {
    AddIdentityDocumentWrapper,
    AddIdentityDocumentTitle,
    AddIdentityDocumentSubtitle,
    AddIdentityDocumentButton,
    AddIdentityDocumentImageWrapper,
    AddIdentityDocumentImage,
    AddIdentityDocumentImageDeleteButton,
    AddIdentityDocumentImageDeleteButtonIcon,
    AddIdentityDocumentImageContainer,
} from "../payoutSettingsStyling";
import { useDropzone } from "react-dropzone";
import useClickOutside from "../../../hook/useClickOutside";
import { stripeAccountSelector } from "../../../state/selectors/stripeAccount";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface IdVerificationProps {
    selected: boolean;
    IdVerifyFlag: boolean;
    toggleIdVerifyFlag: () => void;
    togglePreviousPageFlag: (page: number) => void;
    toggleIDVerification: () => void;
    accessToken: string;
    toggleBankAccountAdded: () => void;
    previousPageFlag: number;
    toggleAdressMenu: () => void;
    toggleAdressMenuManual: () => void;
    toggleBankAccountMenu: () => void;
}

interface IdDocument {
    id: string;
    data: string;
}

const IdVerification: React.FC<IdVerificationProps> = ({
    selected,
    IdVerifyFlag,
    toggleIdVerifyFlag,
    togglePreviousPageFlag,
    toggleIDVerification,
    accessToken,
    toggleBankAccountAdded,
    previousPageFlag,
    toggleAdressMenu,
    toggleAdressMenuManual,
    toggleBankAccountMenu,
}) => {
    const [verifying, setVerifying] = useState<boolean>(false);
    const [verifyFail, setVerifyFail] = useState<boolean>(false);
    const [idDocuments, setIdDocuments] = useState<Array<IdDocument>>([]);
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const handleClickOutside = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
            togglePreviousPageFlag(0);
            toggleIDVerification();
        } else {
            toggleIDVerification();
        }
    };
    const addIDRef = useClickOutside(selected, handleClickOutside);
    const [stripeAccount, setStripeAccount] = useRecoilState(stripeAccountSelector);

    const convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const addIdDocument = useCallback((idDocument: IdDocument) => {
        setIdDocuments((prevState) => {
            return [...prevState, idDocument];
        });
    }, []);
    const removeIdDocument = (id: string) => {
        let documents = idDocuments;
        documents = documents.filter((e) => e.id !== id);
        setIdDocuments(documents);
    };

    const makeid = (length: number) => {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result = "stripe-payout-verification-" + result;
        return result;
    };

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);

            const filesData = await Promise.all(
                files.map(async (file) => {
                    const base64 = await convertBase64(file);
                    return { id: makeid(10), data: base64 as string };
                })
            );

            filesData.forEach((fileData) => addIdDocument(fileData));
        }
    };

    const onSubmit = async () => {
        setIsContinueBtnLoading(true);
        setVerifying(true);
        const images = [];
        const copyStripeHostAccount = JSON.parse(JSON.stringify(stripeAccount));

        for (let i = 0; i < idDocuments.length; i++) {
            const base64 = idDocuments[i].data.split(",")[1];
            images.push(base64);
        }
        try {
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/id/verify", {
                body: {
                    images: images,
                },
                headers: {
                    Authorization: accessToken,
                },
            })
                .then((res) => {
                    if (res.success) {
                        toggleIDVerification();
                        setIsContinueBtnLoading(false);
                        setVerifyFail(false);
                        setVerifying(false);
                        if (IdVerifyFlag) {
                            toggleIdVerifyFlag();
                            togglePreviousPageFlag(0);
                            toggleBankAccountAdded();
                        }
                        //update frontend idverification
                        copyStripeHostAccount.individual.verification.status = "pending";
                        setStripeAccount(copyStripeHostAccount);
                    } else {
                        //update frontend idverification
                        //reopen if failled
                        setVerifying(false);
                        setVerifyFail(true);
                        copyStripeHostAccount.individual.verification.details_code = "failed";
                        setStripeAccount(copyStripeHostAccount);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    //reopen if failled
                    setVerifying(false);
                    setVerifyFail(true);
                    setIsContinueBtnLoading(false);
                    //update frontend idverification
                    copyStripeHostAccount.individual.verification.details_code = "failed";
                    setStripeAccount(copyStripeHostAccount);
                    // if (IdVerifyFlag) {
                    //     toggleBankAccountMenuFailed();
                    //     togglePreviousPageFlag(0);
                    // }
                });
        } catch (err) {
            //reopen if failled
            setVerifying(false);
            setVerifyFail(true);
            setIsContinueBtnLoading(false);
            copyStripeHostAccount.individual.verification.details_code = "failed";
            setStripeAccount(copyStripeHostAccount);
            // toggleIDVerification()
            // if (IdVerifyFlag) {
            //     toggleBankAccountMenuFailed();
            //     togglePreviousPageFlag(0);
            // }
        }
    };

    const goback = () => {
        if (previousPageFlag === 2) {
            togglePreviousPageFlag(1);
            toggleAdressMenu();
        } else if (previousPageFlag === 3) {
            togglePreviousPageFlag(1);
            toggleAdressMenuManual();
        } else if (previousPageFlag === 1) {
            togglePreviousPageFlag(0);
            toggleBankAccountMenu();
        }
        toggleIDVerification();
    };

    const handleFileClick = () => {
        hiddenFileInput.current?.click();
    };

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png", "image/apng", "image/heic", "image/avif", "image/webp"];
            const filteredFiles = acceptedFiles.filter((file) => acceptedFileTypes.includes(file.type));
            if (filteredFiles.length === 0) {
                console.log("No valid image types found in the uploaded files.");
                return;
            }
            const filesData = await Promise.all(
                filteredFiles.map(async (file) => {
                    const base64 = await convertBase64(file);
                    return { id: makeid(10), data: base64 as string };
                })
            );
            filesData.forEach((fileData) => addIdDocument(fileData));
        },
        [addIdDocument]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleCancel = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
            togglePreviousPageFlag(0);
            toggleIDVerification();
        } else {
            toggleIDVerification();
        }
    };

    return (
        <>
            <GlobalPopupContainerCenter
                ref={addIDRef}
                backBtnType={"Arrow"}
                closePopup={goback}
                handleSave={() => onSubmit()}
                cancelPopup={handleCancel}
                disable={idDocuments.length === 0 || isContinueBtnLoading}
                isContinueBtnLoading={isContinueBtnLoading}
            >
                <AddIdentityDocumentWrapper>
                    <AddIdentityDocumentTitle>Verify your identity</AddIdentityDocumentTitle>
                    <AddIdentityDocumentSubtitle invalid={verifyFail}>
                        {verifyFail ? "Please upload a valid ID document and try again." : "Upload the front and back of any Government issued ID."}
                    </AddIdentityDocumentSubtitle>

                    <AddIdentityDocumentButton {...getRootProps()} uploaded={idDocuments.length !== 0} type="button" onClick={handleFileClick}>
                        <input
                            {...getInputProps()}
                            type="file"
                            name="file"
                            ref={hiddenFileInput}
                            onChange={onChange}
                            style={{ display: "none" }}
                            multiple={true}
                            onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                                const target = event.currentTarget;
                                target.value = "";
                            }}
                        />
                        Drop files or click to upload.
                    </AddIdentityDocumentButton>

                    {idDocuments.length < 1 && <AddIdentityDocumentSubtitle invalid={false}>Your documents will only be used to verify your identity.</AddIdentityDocumentSubtitle>}
                    <AddIdentityDocumentImageContainer>
                        {idDocuments.length > 0 &&
                            idDocuments.map((item) => {
                                return (
                                    <AddIdentityDocumentImageWrapper key={item.id}>
                                        <AddIdentityDocumentImage src={item.data} alt="ID-Document" />
                                        <AddIdentityDocumentImageDeleteButton type="button" onClick={() => removeIdDocument(item.id)}>
                                            <AddIdentityDocumentImageDeleteButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg"} alt="delete icon" />
                                        </AddIdentityDocumentImageDeleteButton>
                                    </AddIdentityDocumentImageWrapper>
                                );
                            })}
                    </AddIdentityDocumentImageContainer>
                </AddIdentityDocumentWrapper>
            </GlobalPopupContainerCenter>
        </>
    );
};

export default IdVerification;
