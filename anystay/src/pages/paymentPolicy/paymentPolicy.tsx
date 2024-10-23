import { PrivacyPolicyHeroCard, PrivacyPolicyHeroTitle, PrivacyPolicyContentWrapper, PrivacyPolicyContent, PrivacyPolicyFooter, PrivacyPolicyFooterTitle } from "./paymentpolicyStyling";
import Footer from "../../components/footer/footer";
import HelmetTags from "../../components/Helmet/HelmetTags";

export default function PaymentPolicy() {
    return (
        <>
            <HelmetTags title="Help | Anystay" />
            <PrivacyPolicyHeroCard>
                <PrivacyPolicyHeroTitle>Terms of payment services</PrivacyPolicyHeroTitle>
            </PrivacyPolicyHeroCard>
            <PrivacyPolicyContentWrapper>
                <PrivacyPolicyContent>
                    <strong>1. Introduction</strong>
                    <br />
                    <br />
                    1.1 Anystay.com (“The Platform”, “We”, “Our”, “Us”) provides an online platform and various tools, services, and functions which enable property owners to list property and
                    travellers to book such property (together the “Services”). Services are provided via country specific URL’s, including, in Australia, www.anystay.com.au and via mobile
                    applications (for mobile phone, tablet and other devices or interfaces) (collectively, the "Site"). Booking payments conducted through the Site (the “Payment Services”) are handled
                    by third party payment providers, and/or Owners that are integrated property managers. Payment Services are subject to the terms and conditions of those Owners and third-party
                    payment providers, outlined in Terms of Payment Services.
                    <br />
                    <br />
                    1.2 These terms and conditions (the “Traveller T&Cs”) together with the Privacy Statement govern the relationship between Anystay.com and any individual using or accessing the Site
                    and any of the content or services available through it as a traveller or potential traveller, and who is not using it in their capacity as a property owner or property manager
                    (each, a “Traveller” or “you”). Travellers include people who use the Site to access information about and to book properties, whether for business or leisure purposes, from
                    property owners or property managers.
                    <br />
                    <br />
                    1.3 The Traveller T&Cs constitute a legally binding agreement between Anystay.com and the Traveller. By using or accessing the Site or our platforms or systems, you acknowledge
                    that you agree to and are subject to the Traveller T&Cs and our Privacy Statement on behalf of yourself and all persons named or otherwise travelling on your booking. A Traveller’s
                    booking through or use of Anystay.com is governed by the terms and conditions on this site through which the booking is finalised. If you do not accept and agree to the Traveller
                    T&Cs without modification, you are not authorised to access or otherwise use the Site.
                    <br />
                    <br />
                    1.4 Anystay.com does not authorise anyone to register with, or to otherwise use, this Site unless they have the capacity to enter into legally binding contracts.
                    <br />
                    <br />
                    1.5 Anystay.com may revise these Traveller T&Cs at any time by posting an updated version to this web page. You should visit this page periodically to view the most current
                    Traveller T&Cs because they are binding on you. Any changes made after you have made a booking will not affect that booking unless we are required to make the change by law.
                    <br />
                    <br />
                    <strong>2. The Basics</strong>
                    <br />
                    <br />
                    2.1 This Site is a place where Travellers can view listings of, and obtain information about, properties offered for rent (each a "Property" and together the “Properties”) by
                    others, including property owners, lessees and managers (each, an “Owner” and collectively with a Traveller, the “users”). We may also offer other tools or services to allow users
                    to communicate with each other and to enter into rental agreements or other transactions with each other.
                    <br />
                    <br />
                    2.2 The Site acts only as a platform for users to interact with each other. Anystay.com is not, and does not become, a party to any contractual relationship between the Traveller
                    and the Owner in respect of any booking, Property or payment, and does not mediate between the Traveller and the Owner in the event of any dispute arising between them. You
                    acknowledge and agree that the Traveller and the Owner will be responsible for performing the obligations of any such agreements, that Anystay.com is not a party to such agreements
                    and that Anystay.com disclaims all liability arising from or related to any such agreements. This is true even if the Site facilitates a booking for a Property or the use of other
                    Services, as Anystay.com is not a party to any rental or other agreement between Travellers and Owners.
                    <br />
                    <br />
                    2.3 Travellers are responsible for, and agree to abide by, all laws, rules and regulations applicable to their use of the Site, their use of any Services and any transaction they
                    enter into either on the Site or in connection with their use of the Site. Travellers should please note that Owners are responsible for and agree to abide by all laws, rules and
                    regulations applicable to the listing and rental of their Property and the conduct of their rental property business. Please be aware that even though we are not a party to any
                    rental transaction and assume no liability for legal or regulatory compliance pertaining to any Property Listed on the Site, there may be circumstances where we are nevertheless
                    obligated or required (as we may determine in our sole discretion) to provide information relating to any listing in order to comply with governmental or regulatory body
                    investigations, litigation or administrative proceedings, and we may choose to comply with or disregard such obligation in our sole discretion.
                    <br />
                    <br />
                    2.4 Anystay.com may charge a service fee payable by Travellers who book a Property on the Site via the Site checkout. The service fee covers the use of the Site, including such
                    features as ongoing support, and is calculated as a percentage of the total rental amount (which may include additional fees and damage deposits charged by the Owner). Depending on
                    the laws of the jurisdiction where the Traveller and/or Owner resides, the service fee may be subject to (or may include) GST, Stay Taxes (as detailed in section 2.7), or any other
                    equivalent indirect taxes that are applicable. Owners agree not to encourage or advise a Traveller to avoid or circumvent the service fee charged by Anystay.com, and Traveller
                    agrees not to avoid or circumvent the service fee.
                    <br />
                    <br />
                    2.5 Anystay.com may be required to collect and remit taxes (inclusive of GST, sales taxes, or other equivalent taxes) on the Service Fee. Where required, Anystay.com will provide
                    the Traveller with an invoice stating the amount of taxes charged on such Service Fee. If the Traveller is entitled to an exemption from indirect taxes or their equivalent on the
                    Service Fee, it must provide Anystay.com with required documentation and support for such exemption
                    <br />
                    <br />
                    2.6 If the Traveller is a business traveller that is GST registered or an employee of a company that will reimburse GST charged, it must provide Anystay.com with the valid GST
                    number and its related billing address, in order for Anystay.com to apply the reverse charge mechanism, where applicable, to the Service Fee. If the Traveller has a billing address
                    in Australia, the reverse charge mechanism is not applicable and an Australian GST charge will apply.
                    <br />
                    <br />
                    2.7 Collection and remittance of the Stay Tax: Travellers are liable for the payment of any tourist tax, lodging tax, tourism tax, or other similar taxes as requested by local
                    jurisdiction (“Stay Tax”), which tax must be generally collected by the Owners. In certain jurisdictions, Anystay.com may decide in its sole discretion to directly collect and
                    remit the Stay Tax on behalf of the Owners. In such case, the Owners will have no action to take regarding the collection from the Travellers and the remittance to the city of this
                    tax. In any jurisdictions in which such process will be implemented, Owner instructs and authorizes Stays to collect the Stay Tax from the Travellers on their behalf and to proceed
                    to the relevant tax filing requirements before the City, including its remittance.
                    <br />
                    <br />
                    2.8 The Site contains Listings (defined below) provided by Owners and content from other third parties. Such content is the responsibility of the Owner or third party creator of
                    the content. We have no responsibility for such content as we merely provide access to the content as a service to you and provide you with the facility to communicate directly
                    with the Owner to enquire about a Property and make bookings with the Owner for the rental of such Property. All bookings you make are made directly with the Owner and your
                    contract will be with the Owner. Any such contract will govern your right to occupy and use the Property, and may contain obligations to pay additional fees and taxes. Anystay.com
                    has no liability to you for the Owner’s provision of the Property. We do not endorse, support, represent or guarantee the truthfulness, accuracy or reliability of any information
                    in the Listings or any opinions/content posted by third parties. 2.9 Anystay.com allows Travellers to display prices on the Site in the currency of their choice and may also allow
                    Travellers to pay in the currency of their choice. Different currency choices are generally based on publicly available currency rates and are not guaranteed to be the best rate
                    available. If your currency of choice is not supported for a booking, you'll be charged in the Owner's selected currency. In any event, the currency and exact amount you will pay
                    will be displayed clearly at check out. Our overall compensation may be affected by the currency you choose to pay in. Note that if you pay in a currency different than the
                    currency of your card, your bank or card provider may charge you foreign exchange, transaction, or other fees.
                    <br />
                    <br />
                    <strong>3. Property Listings and Interaction with Owners</strong>
                    <br />
                    <br />
                    3.1 Please note that Owners are entirely responsible for all of the information, including images, text and other content, relating to the Properties they offer (“Listings”), for
                    updating them and ensuring (where relevant) that they are correctly translated. Thus, where a Listing is linked to an automated translation facility, such as Google Translate, it
                    is the Owner’s responsibility to ensure that the resulting translation is accurate, and to correct any deficiencies.
                    <br />
                    <br />
                    3.2 Travellers that use the Site to send enquiries, book a property or who register with us will receive our newsletter. Anystay.com may offer different newsletters from time to
                    time intended to enhance the services offered by Anystay.com or our partners. Travellers may opt-in to receiving newsletters when sending enquiries or opt-out of receiving
                    newsletters when booking on the Site, or cancel their subscription to these email newsletters at any time through the Communications Preference Centre, although it may take a short
                    while for the changes in your preferences to become effective.
                    <br />
                    <br />
                    3.3 The Traveller will receive a confirmation email from Anystay.com once an Enquiry has been sent to the Owner.
                    <br />
                    <br />
                    3.4 The Owner may then communicate with the Traveller directly in connection with the Enquiry and Travellers and Owners may also communicate with each other via the Site (and via
                    other tools on the Anystay.com platform).
                    <br />
                    <br />
                    3.5 Traveller can request a booking online, which: (i) for instant confirmation properties, can be confirmed without a delay from requesting the booking; and (ii) for all other
                    properties, shall be approved or declined by the Owner within 24 hours. For online payment, a Traveller whose booking was confirmed can pay with their credit card or other
                    supported payment methods through the payments gateway offered by our third party payment provider and/or the Owner. The online payment service is subject to the terms and
                    conditions of the third party payment provider, or the Owner and Traveller agrees and acknowledges that (with exception of any obligation to instruct third party service providers)
                    Anystay.com has no control over or any responsibility for this service.
                    <br />
                    <br />
                    3.6 Enquiries sent by a Traveller to an Owner on the Site, may include Traveller’s personal information (including email address, phone numbers and other information the Traveller
                    provides) and the Owner may use such personal information in order to respond to the Traveller.
                    <br />
                    <br />
                    3.7 Any communication between Travellers and Owners using the Anystay.com platform must not include email addresses or phone numbers. Please be aware that any communication on the
                    Site (or through the Anystay.com platform) may be monitored and will be available to view by Anystay.com employees and representatives. Please also be aware, in accordance with our
                    security and account requirements, we may remove or redact information from any such communications (for example, email addresses, phone numbers or other content we deem to be
                    inappropriate or non-compliant with the Traveller T&Cs or applicable laws and regulations).
                    <br />
                    <br />
                    3.8 Anystay.com may, from time to time, use third party email servers to send and track receipt of the Enquiry emails, and analyse the pattern of Enquiry usage reported by these
                    third party tracking systems. Our system does not hold messages indefinitely and they may not be accessible after the message has been delivered to you. Please print a copy of any
                    message which is important to you – for example a payment receipt or a booking confirmation.
                    <br />
                    <br />
                    3.9 Anystay.com has no responsibility for or otherwise stated involvement in, the communications between the Owner and Traveller.
                    <br />
                    <br />
                    <strong>4. Registration and establishing an Account</strong>
                    <br />
                    <br />
                    4.1 Should Travellers wish to use any Services available on the Site other than simply searching for a listing, they must register with the Site. Anystay.com does not authorise
                    anyone to register with the Site unless they are able to enter into legally binding contracts. As a result of successfully completing the registration process, the Traveller
                    obtains a user account for the Site (an “Account”).
                    <br />
                    <br />
                    4.2 To obtain an Account, a Traveller must follow all of the instructions given by Anystay.com during the registration process. A Traveller can sign up for an Account using a
                    personal phone number or alternatively can sign up using Facebook and/or Google login credentials by clicking on the respective login button on the registration screen.
                    <br />
                    <br />
                    4.3 The Traveller’s Account includes information which is made publicly available to other users of the Site and can also be seen by other internet users not registered on the
                    Site, for example, it may show up in Google search engines. An Account includes, amongst other things:
                    <br />
                    <br />
                    • A dedicated page, known as “Profile info” page, on which the Traveller’s profile name will be listed as a mandatory field. Other personal and travel information are optional, at
                    the discretion of the Traveller;
                    <br />
                    • The ability to monitor specific Properties;
                    <br />
                    • Save favourite Properties;
                    <br />
                    • Add notes and create lists;
                    <br />
                    • Save comments on Properties;
                    <br />
                    • Place reviews of rented Properties;
                    <br />
                    • Link Traveller’s Facebook account. By logging in with Facebook or linking an Account with Facebook, the Traveller agrees to transfer their login credentials from Facebook and to
                    display the list of Facebook friends who also have an account with Anystay.com. This information will be displayed on Traveller profile page.
                    <br />
                    • Share favourite Properties or lists with others, such as friends and family and social networks.
                    <br />
                    • A link to Owner Reviews (as defined below)
                    <br />
                    <br />
                    4.4 Travellers can deactivate their Account at any time and they can also unlink their Account and public page from Facebook at any time. Travellers can unlink their Accounts by
                    going directly to their Traveller profile settings page. You understand and accept that even if you deactivate your Account data could be retained by Anystay.com under the terms of
                    the Privacy Statement. You understand and consent to the use of your data as outlined in the Privacy Statement. You also understand and accept that data relating to your
                    transactions with Anystay.com could have been transmitted to and remain on other sites.
                    <br />
                    <br />
                    <br />
                    4.5 Anystay.com also uses Google Analytics to gather statistics on Site usage. There are more details in the Privacy Statement and in Google’s own privacy policy. Google may
                    aggregate data they collect from their various services including Google Analytics, Google Translate, Google Maps and other Google services including YouTube. You understand and
                    accept that the Anystay.com has no control over Google’s data collection.
                    <br />
                    <br />
                    <strong>5. Rights and obligations of Anystay.com</strong>
                    <br />
                    <br />
                    5.1 Anystay.com will endeavour to reproduce accurately on the Site any photographs supplied by Owner.
                    <br />
                    <br />
                    5.2 Further, you acknowledge that each Owner and not Anystay.com is responsible for the accuracy with which the photos and descriptions depict the relevant Property.
                    <br />
                    <br />
                    5.3 Anystay.com may occasionally undertake upgrades and maintenance of the Site, its platforms and systems. These works may result in restrictions on usage. Anystay.com will, where
                    possible, aim to ensure that such works are undertaken at a time when most Travellers’ usage is least affected.
                    <br />
                    <br />
                    5.4 User verification on the Internet is difficult and we cannot and do not assume any responsibility for verification of each user's purported identity. We encourage Travellers
                    and Owners to communicate directly with each other through the tools available on the Site. We further encourage Travellers to take other reasonable measures to assure yourself of
                    an Owner's identity and of the Property and relevant details of your booking or proposed booking. You agree to: (i) keep your password and online ID for both your Account and your
                    email account secure and strictly confidential, providing it only to authorised users of such accounts, (ii) instruct each person to whom you give your online ID and password that
                    he or she is not to disclose it to any unauthorised person, (iii) notify us immediately and select a new online ID and password if you believe your password for your Account may
                    have become known to an unauthorised person or has otherwise been compromised, and (iv) notify us immediately if you are contacted by anyone requesting your online ID and/or
                    password. Further, if we suspect any unauthorised access to or use of your Account, upon our request you must promptly change your ID and password and take any other related
                    action(s) as we may reasonably request. We discourage you from giving anyone access to your online ID and password for your Account. However, if you do give someone your Account ID
                    and/or password, or if you fail to adequately safeguard such information, you are responsible for any and all transactions that the person performs while using your Account and/or
                    your email account, even those transactions that are fraudulent or that you did not intend or want performed. For the avoidance of doubt, Anystay.com will have no liability to you
                    in any such event.
                    <br />
                    <br />
                    5.5 You acknowledge and agree that Anystay.com is not responsible for checking the identity, or for the behaviour, of Owners or for establishing the nature, condition or existence
                    of a Property.
                    <br />
                    <br />
                    5.6 Anystay.com reserves the right to transfer these Traveller T&Cs, and to assign or subcontract any or all of its rights and obligations under these Traveller T&Cs, to a third
                    party, but will not do so in such a way as to reduce any guarantees you are given under these Traveller T&Cs.
                    <br />
                    <br />
                    5.7 The property listings displayed in a given set of search results depend primarily on the particular combination of property parameters and filters entered by the traveller.
                    Search criteria may include such things as property location, dates of stay, number of travellers, type and nature of accommodations, desired property attributes and amenities, and
                    price range, all of which are processed in accordance with our computer algorithms to find listings that most closely match those criteria. The order of appearance of those
                    listings among all of the properties on the platform that meet the traveller’s search criteria (i.e., the sort order) then may be influenced further by traveller-selected sort
                    preferences, such as low-to-high pricing or high-to-low ratings; as well as factors that are compared automatically by sort-algorithms, such as popularity of the property among
                    other travellers, quality of the property and the listing content, competitiveness of rates and availability, and the amount we will earn in service fees, all relative to other
                    properties that meet the traveller’s criteria. Traveller search-results and property sort-order are dynamic, and will vary from search to search, based on demand, availability,
                    changes in partner status or listing popularity, and so on. In addition, as we continue to make improvements in our programs and tools, we may run tests or modify our default
                    sort-order algorithms from time to time to help improve both the traveller and partner platform experience.
                    <br />
                    <br />
                    5.8 When you make a booking for a Property sourced through the Site, Anystay.com in most instances will receive a commission for that booking.
                    <br />
                    <br />
                    <strong>6. Intellectual Property</strong>
                    <br />
                    <br />
                    6.1 All content that appears on the Site is protected by copyright and other applicable intellectual property rights. To the maximum extent permitted by law, reproduction of the
                    Site, in whole or in part, including the copying of text, graphics or designs, is prohibited.
                    <br />
                    <br />
                    6.2 Travellers are permitted to download, display or print individual pages of the Site to evidence any agreement with Anystay.com and to retain a copy of their bookings. The
                    relevant file or the relevant printout must clearly bear the text “© Copyright [Present Year] Anystay.com - All Rights Reserved”.
                    <br />
                    <br />
                    6.3 Where a Traveller submits to or transmits through the Site (or Anystay.com’s platform or systems) any content of any type, including text or images, the Traveller undertakes
                    that it has the legal rights to do so.
                    <br />
                    <br />
                    6.4 To the extent that Travellers’ reviews or other content may contain trademarks or other proprietary names or marks, Travellers undertake that they have the right to use such
                    names or marks.
                    <br />
                    <br />
                    6.5 By submitting any form of content to the Site (including but not limited to all text, descriptions, reviews, photographs, and the like), the Traveller grants Anystay.com and
                    each of their subsidiary and affiliate companies, a non-exclusive, royalty-free, perpetual, transferable, irrevocable and fully sub-licensable (through multiple tiers) right to
                    use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform any such content throughout the world in any media, now
                    known or hereafter devised for any purpose.
                    <br />
                    <br />
                    6.6 Copyright Infringement Complaints -- Pursuant to the Digital Millennium Copyright Act (in the US), the E-Commerce Directive (in the EU), and similar laws relating to
                    copyrighted online content, if you believe your copyrighted work is being infringed on or through the Site, please complete and submit a written Anystay.com Copyright Infringement
                    Complaint Form (the "Notice") to our general contact email. Upon receipt of a Notice, Anystay.com will take appropriate action, including removal of the challenged material from
                    the Site and/or termination of the account of the Anystay user in appropriate circumstances. Please include in the Notice:
                    <br />
                    <br />
                    1. Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a
                    representative list of such works at that site.
                    <br />
                    2. Identification of the images or material that is allegedly infringing your copyrighted work or is the subject of infringing activity and that you believe should be removed, with
                    sufficient information to enable Anystay.com to locate the specific images or material. <br />
                    3. Your contact information, including your name, address, telephone number, and, if available, an email address at which you may be contacted. <br />
                    4. The following statement: I have a good faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law. <br />
                    5. The following statement: The information in this Notice is accurate, and, under penalty of perjury, I declare that (choose one) (i) I am the owner or (ii) I am authorised to act
                    on behalf of the owner, of an exclusive right that is allegedly infringed. <br />
                    6. And a physical or electronic signature of a person authorised to act on
                    <br /> behalf of the owner of the exclusive right that is allegedly being infringed.
                    <br />
                    <br />
                    <strong>7. Travellers’ Accounts, Communications and Reviews</strong>
                    <br />
                    <br />
                    7.1 Travellers must provide only accurate, complete and truthful information concerning their identity in their Accounts and profile pages, and any other communications on the
                    Site, including reviews of Properties.
                    <br />
                    <br />
                    7.2 Messages sent via Anystay.com’s systems should only relate to genuine booking Enquiries. We do not tolerate spam or unsolicited commercial electronic communications of any
                    kind. It is prohibited to misuse Anystay.com’s systems, such as by sending unsolicited commercial communications (spam) or disclosing personal information of users to a third
                    party, unless you have the express permission from the user. Emails and Site recommendations transmitted via the “Recommend this Site” function should only be sent with the
                    recipient’s consent. You agree that you will protect other users’ personal information with the same degree of care with which you protect your own confidential information (using
                    at minimum a reasonable standard of care), and you assume all liability for the misuse, loss, or unauthorised transfer of such information.
                    <br />
                    <br />
                    7.3 Travellers may post their reviews of Owners’ Properties (“Traveller Reviews”) on the Site. The Owner is given the opportunity to view Traveller Reviews and to respond to them
                    (an “Owner Response”). Owners will also be given the opportunity to rate the Traveller’s stay (“Owner Review(s)”) and such Owner Reviews will be made available to other Owners you
                    contact. Owner Reviews cannot be used to exclude or discriminate against individuals. The Traveller’s sole remedy in relation to Owner Reviews, and Anystay.com’s sole obligation in
                    relation to Owner Reviews, is to permit the Traveller to post a Traveller Review within 14 days of the submission of the Owner Review. Anystay.com otherwise expressly disclaims any
                    liability for any Traveller Review or Owner Review. Traveller acknowledges and agrees that Anystay.com may make such Owner Review available to other Owners who the Traveller
                    contacts through the Site. More detail as to the Owner Review process is available here.
                    <br />
                    <br />
                    7.4 Please note that Anystay.com does not, and realistically does not have the resources to, verify the accuracy or otherwise of Traveller Reviews, Owner Responses or Owner
                    Reviews.
                    <br />
                    <br />
                    7.5 Anystay.com nevertheless requires all Traveller Reviews, Owner Responses, Owner Reviews and other communications using Anystay.com’s systems to conform to the Content
                    Guidelines, and may decline to post any of them that Anystay.com finds do not comply.
                    <br />
                    <br />
                    7.6 Anystay.com does not generally conduct identity checks. If Travellers suspect that an Owner has supplied false information, they are invited to notify Anystay.com through the
                    contact form.
                    <br />
                    <br />
                    7.7 Anystay.com complies with its Privacy Statement. Further details can be obtained from the Privacy Statement. The Traveller consents to the collection, use and handling of their
                    data as outlined in the Privacy Policy. Travellers should note, Owners have generally authorised Anystay.com to forward the Owner’s contact details, including telephone number, to
                    Travellers in connection with a Property booking. Travellers may ask for these details to be supplied on production of proof of the booking; alternatively, these details may be
                    made available to Travellers through their Accounts.
                    <br />
                    <br />
                    <strong>8. Indemnification</strong>
                    <br />
                    <br />
                    You agree to defend, indemnify and hold harmless Anystay.com and its equity holders, officers, directors, employees and agents against any claims, causes of action, demands,
                    recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature, including but not limited to reasonable legal and accounting fees, brought or
                    occasioned by third parties alleging, arising out of, or in connection with: (a) any material or content you provide in connection with the Site; (b) your use of the Site
                    (including, without limitation, any content on the Site); (c) any breach by you of these Traveller T&Cs; or (d) your use of the Property. Anystay.com will provide notice to you
                    promptly of any such claims.
                    <br />
                    <br />
                    <strong>9. Prohibitions</strong>
                    <br />
                    <br />
                    The Traveller must not directly or indirectly:
                    <br />
                    <br />
                    • with respect to the Site, its content, and databases comprised in the Site, in any form, whether by using automatic devices or manual processes, exploit, copy, distribute,
                    reproduce, edit, translate, make publicly accessible or decompile any of the same;
                    <br />
                    • monitor content on the Site or Anystay.com’s platform or systems by means of robots, spiders, or other automatic instruments; provided, however, that a limited exception from the
                    foregoing exclusion is provided to general purpose internet search engines (not including any website or search engine or other service that provides classified listings or adverts
                    for properties available for booking, or any subset of the same or which is in the business of providing services that compete with Anystay.com) and non-commercial public archives
                    that use tools to gather information for the sole purpose of displaying hyperlinks to the Site, provided they each do so from a stable IP address or range of IP addresses using an
                    easily identifiable agent and comply with Anystay.com’s robots.txt file;
                    <br />
                    • use the Site or Anystay.com’s platform or systems for purposes other than those referred to in these Traveller T&Cs;
                    <br />
                    • use the Site or the Services for the purpose of booking or soliciting a rental for a property other than a Property under a valid Listing;
                    <br />
                    • reproduce any portion of the Site on another website or otherwise, using any device including, but not limited to, use of a frame or border environment around the Site, or any
                    other framing technique to enclose any portion or aspect of the Site, or mirror or replicate any portion of the Site;
                    <br />
                    • upload or send to the Site (or Anystay.com’s platform or systems) any contents or programs, which on account of their size or nature, might damage Anystay.com’s computers or
                    networks;
                    <br />
                    • include content on the Site (or Anystay.com’s platform or systems) that breaches any applicable criminal or other laws, or encourages any such breach;
                    <br />
                    • use or access the Site or Anystay.com’s platform or systems in any way that might endanger any computer system or network, including by making available any virus (for which
                    purpose, “virus” includes any program introduced into a system deliberately which carries out a useless and/or destructive function, such as displaying an irritating message or
                    systematically over-writing the information on a user's hard disk);
                    <br />
                    • post or transmit information that is in any way false, fraudulent, or misleading, or engage in any act that may be considered “phishing” (whether primary, secondary or other) or
                    that would give rise to criminal or civil liability;
                    <br />
                    • post or transmit any unlawful, threatening, abusive, libellous, defamatory, obscene, vulgar, indecent, inflammatory, sexually explicit, pornographic or profane material
                    <br />
                    <br />
                    <strong>10. Right to delete content</strong>
                    <br />
                    <br />
                    Travellers are responsible for ensuring that their communications, and content posted, through or in connection with the Site, including Traveller Reviews and communications with
                    Owners, do not infringe applicable law, the rights of any person or entity, or contain false information, personal insults, anything libellous, slanderous or defamatory, anything
                    that infringes copyright, data protection law or the Content Guidelines. Anystay.com may review any content on the Site or Anystay.com’s platform or systems and delete it or alter
                    it when it is no longer accurate or up-to-date. Without prejudice to any other available remedies, Anystay.com shall be entitled immediately to remove from the Site any
                    communications or content that infringes these requirements, and to suspend or prevent the usage of any related Account.
                    <br />
                    <br />
                    <strong>11. Notifications</strong>
                    <br />
                    <br />
                    11.1 Any messages to us may be sent using the contact form.
                    <br />
                    <br />
                    11.2 Notifications of copyright infringement must contain:
                    <br />
                    <br />
                    • your postal address, telephone number and email address;
                    <br />
                    • precise details about the content in question (insertion of the text or image) including a link to the website;
                    <br />
                    • a signed declaration in lieu of an oath, which evidences that you:
                    <br />
                    o hold the exclusive rights to use the work; and
                    <br />
                    o have not authorised the use of the material in question in this form.
                    <br />
                    <br />
                    <strong>12. Liability of Anystay.com</strong>
                    <br />
                    <br />
                    12.1 The Site is merely a platform allowing you to view Properties listed on the Site, communicate with Owners in respect of any queries or questions you may have, or to make a
                    booking with an Owner for the rental of a Property. We accept no liability in relation to any contract you enter into with an Owner or for any Property you book, nor do we accept
                    liability for the acts or omissions of any Owners or other person(s) or party(ies) connected with the Property. For all Properties, your contract will be with the Owner and their
                    terms and conditions will apply to your booking. These terms and conditions may limit and/or exclude their liability to you and you should read them carefully before making a
                    booking.
                    <br />
                    <br />
                    12.2 We do not provide liability insurance protection for Owners, property managers, or Travellers; regardless of whether a user obtains insurance coverage through one of our third
                    party providers. Travellers are advised to obtain suitable travel insurance to cover their booking for the Property from an Owner, including in the event they have to cancel their
                    booking. It is the Traveller’s responsibility to ensure that the insurance it purchases is adequate and appropriate for the Traveller’s particular needs.
                    <br />
                    <br />
                    12.3 To the extent permitted by law, but subject to clause 12.4, in no event will Anystay.com or any of its subsidiaries, affiliates, officers, directors, consultants, agents
                    and/or employees or any third party provider of a tool offered on any site of a member of Anystay.com be liable for any lost profits or any indirect, consequential, special,
                    incidental, or punitive damages arising out of, based on, or resulting from the Site or Anystay.com’s platform or systems, any materials or content you submit to the Site, and your
                    use of the Site and/or any transaction between users, even if Anystay.com has been advised of the possibility of such damages. These limitations and exclusions apply without regard
                    to whether the damages arise from breach of contract, negligence or any other cause of action. If you are dissatisfied with the Site (or the Anystay.com platform or systems) or you
                    do not agree with any part of these Traveller T&Cs, then your sole and exclusive remedy against Anystay.com is to discontinue using the Site.
                    <br />
                    <br />
                    12.4 Nothing in these Traveller T&Cs affects any rights you may have and which by law cannot be excluded, including under the Competition and Consumer Act 2010 (Cth) (including,
                    without limitation, under the Australian Consumer Law, contained in Schedule 2 of that Act) and under State and Territory consumer protection legislation.
                    <br />
                    <br />
                    <strong>13. Disputes</strong>
                    <br />
                    <br />
                    13.1 Anystay.com is committed to customer satisfaction, so if you have a problem or dispute, we will try to resolve your concerns. But if we are unsuccessful, you may pursue claims
                    as explained in this section.
                    <br />
                    <br />
                    13.2 You agree to first give us an opportunity to resolve any disputes or claims relating in any way to the Site, these Traveller T&Cs, any dealings with our customer service
                    agents, any services or products provided, any representations made by us, or our Privacy Policy (“Claims”) by contacting us. If we are not able to resolve your Claims within 60
                    days, you may seek relief through arbitration or in small claims court, as set forth below.
                    <br />
                    <br />
                    13.10 These Traveller T&Cs are governed by the laws of New South Wales, Australia. Use of this Site is unauthorised in any jurisdiction that does not give effect to all provisions
                    of this Agreement, including, without limitation, this paragraph.
                    <br />
                    <br />
                    <strong>14. Miscellaneous</strong>
                    <br />
                    <br />
                    14.1 These Traveller T&Cs and the Privacy Policy constitute the entire agreement between Anystay.com and Traveller relating to their subject matter.
                    <br />
                    <br />
                    14.2 Anystay.com recommends that you save your own copy of these Traveller T&Cs in a separate file on your device or in print-out form.
                    <br />
                    <br />
                    14.3 Anystay.com’s failure to act with respect to a breach of these Traveller T&Cs by the Traveller or others does not waive Anystay.com’s right to act with respect to subsequent
                    or similar breaches.
                    <br />
                    <br />
                    14.4 The headings are for ease of reference only and do not affect the interpretation or construction of these Traveller T&Cs.
                    <br />
                    <br />
                    14.5 The invalidity of one or more provisions of these Traveller T&Cs shall not affect the validity of the other provisions.
                    <br />
                    <br />
                    14.6 Travellers staying in a Property in New South Wales must comply with their obligations under the NSW Short-term Rental Accommodation Industry Code of Conduct. The Code also
                    places obligations on Owners and platforms (like us). We recommend you familarise yourself with any obligations applicable to you under the Code, which for Travellers can be found
                    in section 2.5.
                    <br />
                    <br />
                </PrivacyPolicyContent>
            </PrivacyPolicyContentWrapper>
            <PrivacyPolicyFooter>
                <PrivacyPolicyFooterTitle>Made in Australia, for the world.</PrivacyPolicyFooterTitle>
            </PrivacyPolicyFooter>
            <Footer />
        </>
    );
}
