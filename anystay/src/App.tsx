import { useEffect, useState, lazy, Suspense } from "react";
import { configureAmplify } from "./utils/config/amplifyConfig";
import { BrowserRouter, Routes, Route, Navigate, createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import mixpanel from "mixpanel-browser";
//load css
import "./App.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css/bundle";
import "swiper/css";
import "react-phone-number-input/style.css";
import "./components/navbar/mobileNavbar/mobileNavbar.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./pages/createListing/subPages/googleAutoComplete.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./pages/yourListing/yourStyling.css";
import "react-18-image-lightbox/style.css";

// Components
import ProtectedRoute from "./ProtectedRoutes";
import ScrollToTop from "./scrollToTop";
import Navbar from "./components/navbar/desktopNavbar/navbar";
import Authbar from "./components/auth/authbar";
import LoadingFullPageModal from "./components/loadingFullPageModal/loadingFullPageModal";

import { initLogin } from "./utils/auth/initLogin";
import { useCookies } from "react-cookie";

import ReferralPage from "./pages/referralPage/referralPage";
// Setup Sentry Error Logging and Monitoring
import * as Sentry from "@sentry/react";
import CheckGuestMode from "./components/checkGuestMode/CheckGuestMode";
import ErrorFallbackPage from "./components/errorFallbackPage/errorFallbackPage";

import { HelmetProvider } from "react-helmet-async";

import FirstTimeWelcomePopup from "./components/firstTimeWelcomePopup/firstTimeWelcomePopup";
import CatchGoogleLoginErr from "./components/auth/catchGoogleLoginErr";
import GoogleAuthRedirectHandler from "./components/googleAuthRedirectHandler/googleAuthRedirectHandler";
import CatchHospitableCode from "./components/catchHospitableCode/catchHospitableCode";

Sentry.init({
    dsn: "https://ad815304989401de68858c7284549007@o4507525141430272.ingest.us.sentry.io/4507525143068672",
    integrations: [
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes,
        }),
        Sentry.replayIntegration(),
    ],
    environment: process.env.REACT_APP_SENTRY_ENV,
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
});

// Lazy load components
const Home = lazy(() => import("./pages/newHome/home"));
const HostLandingPage = lazy(() => import("./pages/hostLandingPage/hostLandingPage"));
const Settings = lazy(() => import("./pages/settings/settings"));
const PayoutSettings = lazy(() => import("./pages/payoutSettings/payoutSettings"));
const PaymentSettings = lazy(() => import("./pages/paymentSettings/paymentSettings"));
const Profile = lazy(() => import("./pages/profile/profile"));
const HostProfile = lazy(() => import("./pages/hostProfile/profile"));
const Payouts = lazy(() => import("./pages/payouts/payouts"));
const Conversation = lazy(() => import("./pages/conversation/conversation"));
const HostConversation = lazy(() => import("./pages/hostConversation/hostConversation"));
const EditProfile = lazy(() => import("./pages/editProfile/editProfile"));
const EditListing = lazy(() => import("./pages/editListing/editListing"));
const ViewListing = lazy(() => import("./pages/viewListing/viewListing"));
const YourStays = lazy(() => import("./pages/yourStays/yourStays"));
const YourInbox = lazy(() => import("./pages/yourInbox/yourInbox"));
const HostInbox = lazy(() => import("./pages/hostInbox/hostInbox"));
const YourBooking = lazy(() => import("./pages/yourBooking/yourBooking"));
const ReviewStay = lazy(() => import("./pages/reviewStay/reviewStay"));
const ReviewGuest = lazy(() => import("./pages/reviewGuest/reviewGuest"));
const SearchListing = lazy(() => import("./pages/searchListing/searchListing"));
const YourListings = lazy(() => import("./pages/yourListing/yourListing"));
const YourCalendar = lazy(() => import("./pages/newCalendar/yourCalendar"));
const SavedListings = lazy(() => import("./pages/savedListings/savedListings"));
const BookingHostReceipt = lazy(() => import("./pages/bookingHostReceipt/bookingHostReceipt"));
const CreateListing = lazy(() => import("./pages/createListing/createListing"));
const CreateBooking = lazy(() => import("./pages/createBooking/createBooking"));
const ChangeBooking = lazy(() => import("./pages/changeBooking/changeBooking"));
const LoginAndSecurity = lazy(() => import("./pages/security/loginAndSecurity"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const BookingRequest = lazy(() => import("./pages/bookingRequest/bookingRequest"));
const ManagePayments = lazy(() => import("./pages/managePayments/managePayments"));
const PaymentDetails = lazy(() => import("./pages/paymentDetails/paymentDetails"));
const AllBookings = lazy(() => import("./pages/allBookings/allBookings"));
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/privacyPolicy"));
const PaymentPolicy = lazy(() => import("./pages/paymentPolicy/paymentPolicy"));
const SupportCenter = lazy(() => import("./pages/supportCenter/supportCenter"));
const GeneralPolicy = lazy(() => import("./pages/generalPolicy/generalPolicy"));
const IntegrationResult = lazy(() => import("./pages/integrationResult/integrationResult"));

declare const window: any;

const mixpanelToken: string = process.env.REACT_APP_MIXPANEL_TOKEN || "";
mixpanel.init(mixpanelToken);

if (process.env.REACT_APP_ENV === "production") {
    console.log = function () {};
    console.warn = function () {};
}

export default function App() {
    const [fullPageLoading, setFullPageLoading] = useState<boolean>(true);
    const [loggingIn, setLoggingIn] = useState<boolean>(true);
    const [cookies, setCookie] = useCookies(["referralCode"]);
    const [integrationSuccess, setIntegrationSuccess] = useState<boolean | null>(null);

    useEffect(() => {
        // This will apply the amplify configuration
        configureAmplify();
        const initLoginFunc = async () => {
            await initLogin();
            setFullPageLoading(false);
            setLoggingIn(false);
        };
        initLoginFunc();
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const referralCode = urlParams.get("ref");

        if (referralCode) {
            setCookie("referralCode", referralCode, { path: "/" });
        }
    }, [setCookie]);

    const urlNeedLoading = (pathname: string) => {
        return (
            pathname !== "/" &&
            !pathname.includes("/listing") &&
            !pathname.includes("/search") &&
            !pathname.includes("/privacy-policy") &&
            !pathname.includes("/payment-policy") &&
            !pathname.includes("/terms-and-conditions") &&
            !pathname.includes("/list-your-place") &&
            !pathname.includes("/referral-page")
        );
    };

    return (
        <>
            <Sentry.ErrorBoundary fallback={<ErrorFallbackPage />}>
                <HelmetProvider>
                    <RecoilRoot>
                        <RecoilNexus />
                        {fullPageLoading && urlNeedLoading(window.location.pathname) ? (
                            <LoadingFullPageModal reverse={false} guestMode={true} />
                        ) : (
                            <BrowserRouter>
                                <CheckGuestMode />
                                <Navbar loggingIn={loggingIn} showFullPageLoading={setFullPageLoading} />
                                <CatchGoogleLoginErr />
                                <CatchHospitableCode onSuccess={setIntegrationSuccess} />
                                <Authbar />
                                <GoogleAuthRedirectHandler />
                                <ScrollToTop />
                                <FirstTimeWelcomePopup />
                                <Routes>
                                    <Route
                                        path="/hospitable/init/*"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <IntegrationResult isSuccess={integrationSuccess} platform="hospitable" />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/list-your-place"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <HostLandingPage />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/create-booking/:id/:arrivalDate/:departureDate"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <CreateBooking />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/listing/:id"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <ViewListing />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/search"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <SearchListing />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/support-center"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <SupportCenter />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/privacy-policy"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <PrivacyPolicy />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/payment-policy"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <PaymentPolicy />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/terms-and-conditions"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <GeneralPolicy />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/guest/profile/:id"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <Profile />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/host/profile/:id"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <HostProfile />
                                            </Suspense>
                                        }
                                    />
                                    <Route element={<ProtectedRoute />}>
                                        <Route
                                            path="/your-listings/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <YourListings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/your-calendar"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <YourCalendar />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/create-listing/:userhostmodelID/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <CreateListing />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/create-listing/:userhostmodelID"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <CreateListing />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/booking-request/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <BookingRequest />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/booking-receipt/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <BookingHostReceipt />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/complete-booking/:bookingID"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <CreateBooking />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/saved-listings/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <SavedListings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/your-booking/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <YourBooking />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/review-stay/:bookingId/:listingId"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <ReviewStay />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/review-guest/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <ReviewGuest />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/change-your-booking/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <ChangeBooking />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/your-stays/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <YourStays />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/your-inbox/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <YourInbox />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/your-host-inbox/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <HostInbox />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/host-conversation/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <HostConversation />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/conversation/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <Conversation />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/settings"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <Settings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/security-settings"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <LoginAndSecurity />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/payout-settings"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <PayoutSettings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/payment-settings"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <PaymentSettings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/payouts"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <Payouts />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/edit-profile"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <EditProfile />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/edit-listing/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <EditListing />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/manage-payments/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <ManagePayments />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/payment-details/:id"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <PaymentDetails />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/dashboard"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <Dashboard />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/all-bookings"
                                            element={
                                                <Suspense fallback={<></>}>
                                                    <AllBookings />
                                                </Suspense>
                                            }
                                        />
                                    </Route>
                                    <Route
                                        path="/referral-page"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <ReferralPage />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/"
                                        element={
                                            <Suspense fallback={<></>}>
                                                <Home />
                                            </Suspense>
                                        }
                                    />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </BrowserRouter>
                        )}
                    </RecoilRoot>
                </HelmetProvider>
            </Sentry.ErrorBoundary>
        </>
    );
}
