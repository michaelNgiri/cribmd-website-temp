import { memo, useMemo, useCallback } from 'react';
import { LazyBox, Box, Anchor } from 'src/components/shared';
import { Heading, renderListItem } from './Main';

const MainBody = (): JSX.Element => {
  return (
    <>
      <LazyBox as="section">
        <Heading text="AGREEMENT TO TERMS" />
        <Box as="p">
          These Terms of Use constitute a legally binding agreement made between you, whether
          personally or on behalf of an entity (“you”) and CribMD PLC, doing business as CribMD
          (“CribMD”, “we”, “us” or “our” ), concerning your access to and use of the website as well
          as any other media form, media channel, mobile website or mobile application related,
          linked, or otherwise connected thereto (collectively, the “Site”). We are registered in
          Nigeria/the USA and have our registered office at 4 Babatope Bejide Cres, Lekki, Lagos
          105102 and 23777 Mulholland Hwy Calabasas, California, CA 91302 respectively. You agree
          that by accessing the Site, you have read, understood, and agreed to be bound by all of
          these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
          EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY
        </Box>
        <Box as="p">
          Supplemental terms and conditions or documents that may be posted on the Site from time to
          time are hereby expressly incorporated herein by reference. We reserve the right, in our
          sole discretion, to make changes or modifications to these Terms and Conditions at any
          time and for any reason. We will alert you about any changes by updating the “Last
          updated” date of these Terms and Conditions and you waive any right to receive specific
          notice of each such change. It is your responsibility to periodically review these Terms
          and Conditions to stay informed of updates. You will be subject to, and will be deemed to
          have been made aware of and to have accepted, the changes in any revised Terms and
          Conditions by your continued use of the Site after the date such revised Terms are posted.
        </Box>
        <Box as="p">
          The information provided on the Site is not intended for distribution to or use by any
          person or entity in any jurisdiction or country where such distribution or use would be
          contrary to law or regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who choose to access the
          Site from other locations do so on their own initiative and are solely responsible for
          compliance with local laws, if and to the extent local laws are applicable.
        </Box>
        <Box as="p">
          CribMD website and app are intended for users who are at least 13 years of age.] All users
          who are minors in the jurisdiction in which they reside (generally under the age of 18)
          must have the permission of, and be directly supervised by, their parent or guardian to
          use the Site. If you are a minor, you must have your parent or guardian read and agree to
          these Terms of Use prior to you using the Site and application.
        </Box>
        <Box as="p"></Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="INTELLECTUAL PROPERTY RIGHTS" />
        <Box as="p">
          Unless otherwise indicated, the Site is our proprietary property and all source code,
          databases, functionality, software, website designs, audio, video, text, photographs, and
          graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and
          logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and
          are protected by copyright and trademark laws and various other intellectual property
          rights and unfair competition laws of the United States, foreign jurisdictions, and
          international conventions. The Content and the Marks are provided on the Site “AS IS” for
          your information and personal use only. Except as expressly provided in these Terms of
          use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated,
          republished, uploaded, posted, publicly displayed, encoded, translated, transmitted,
          distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
          without our express prior written permission.
        </Box>
        <Box as="p">
          Provided that you are eligible to use the Site, you are granted a limited license to
          access and use the Site and to download or print a copy of any portion of the Content to
          which you have properly gained access solely for your personal, non-commercial use. We
          reserve all rights not expressly granted to you in and to the Site, Content and the Marks.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="USER REPRESENTATIONS" />
        <Box as="p">By using the Site, you represent and warrant that: </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'all registration information you submit will be true, accurate, current, and complete;',
              'you will maintain the accuracy of such information and promptly update such registration information as necessary;',
              'you have the legal capacity and you agree to comply with these Terms of Use; ',
              'you are not under the age of 13;',
              'not a minor in the jurisdiction in which you reside[, or if a minor, you have received parental permission to use the Site',
              'you will not access the Site through automated or non-human means, whether through a bot, script or otherwise',
              'you will not use the Site for any illegal or unauthorized purpose; and',
              'your use of the Site will not violate any applicable law or regulation.'
            ],
            []
          ).map(useCallback(renderListItem, []))}
        </Box>
        <Box as="p">
          If you provide any information that is untrue, inaccurate, not current, or incomplete, we
          have the right to suspend or terminate your account and refuse any and all current or
          future use of the Site (or any portion thereof).
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="USER REGISTRATION" />
        <Box as="p">
          You may be required to register with the Site. You agree to keep your password
          confidential and will be responsible for all use of your account and password. We reserve
          the right to remove, reclaim, or change a username you select if we determine, in our sole
          discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="PROHIBITED ACTIVITIES" />
        <Box as="p">
          You may not access or use the Site for any purpose other than that for which we make the
          Site available. The Site may not be used in connection with any commercial endeavors
          except those that are specifically endorsed or approved by us.
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
              'make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
              'use a buying agent or purchasing agent to make purchases on the Site.',
              'use the Site to advertise or offer to sell goods and services.',
              'circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.',
              'engage in unauthorized framing of or linking to the Site.',
              'trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords;',
              'make improper use of our support services or submit false reports of abuse or misconduct.',
              'engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
              'interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.',
              'attempt to impersonate another user or person or use the username of another user.',
              'sell or otherwise transfer your profile.',
              'use any information obtained from the Site in order to harass, abuse, or harm another person.',
              'use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.',
              'decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.',
              'attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.',
              'harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.',
              'delete the copyright or other proprietary rights notice from any Content.',
              'copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, Python or other code.',
              'upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.',
              'upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).',
              'except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.',
              'disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.',
              'use the Site in a manner inconsistent with any applicable laws or regulations.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="USER GENERATED CONTRIBUTIONS" />
        <Box as="p">
          The Site may invite you to chat, contribute to, or participate in blogs, message boards,
          rate doctors, answer questionnaires or surveys online forums, and other functionality, and
          may provide you with the opportunity to create, submit, post, display, transmit, perform,
          publish, distribute, or broadcast content and materials to us or on the Site, including
          but not limited to text, writings, video, audio, photographs, graphics, comments,
          suggestions, or personal information or other material (collectively,
          &ldquo;Contributions&rdquo;). Contributions may be viewable by other users of the Site and
          through third-party websites. As such, any Contributions you transmit may be treated as
          non-confidential and non-proprietary. When you create or make available any Contributions,
          you thereby represent and warrant that:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.',
              'you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.',
              'you have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.',
              'your Contributions are not false, inaccurate, or misleading.',
              'your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.',
              'your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).',
              'your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.',
              'Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.',
              'your Contributions do not violate any applicable law, regulation, or rule.',
              'your Contributions do not violate the privacy or publicity rights of any third party.',
              'Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.',
              'Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.',
              'your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="p">
          Any use of the Site in violation of the foregoing violates these Terms of Use and may
          result in, among other things, termination or suspension of your rights to use the Site.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="CONTRIBUTION LICENSE" />
        <Box as="p">
          You and the Site agree that we may access, store, process, and use any information and
          personal data that you provide following the terms of the Privacy Policy and your choices
          (including settings).
        </Box>
        <Box as="p">
          By submitting suggestions or other feedback regarding the Site, you agree that we can use
          and share such feedback for any purpose without compensation to you
        </Box>
        <Box as="p">
          We do not assert any ownership over your Contributions. You retain full ownership of all
          of your Contributions and any intellectual property rights or other proprietary rights
          associated with your Contributions. We are not liable for any statements or
          representations in your Contributions provided by you in any area on the Site. You are
          solely responsible for your Contributions to the Site and you expressly agree to exonerate
          us from any and all responsibility and to refrain from any legal action against us
          regarding your Contributions.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="GUIDELINES FOR REVIEWS" />
        <Box as="p">
          We may provide you areas on the Site to leave reviews or ratings. When posting a review,
          you must comply with the following criteria:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'you should have firsthand experience with the person/entity being reviewed;',
              'your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language;',
              'your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;',
              'your reviews should not contain references to illegal activity;',
              'you should not be affiliated with competitors if posting negative reviews;',
              'you should not make any conclusions as to the legality of conduct;',
              'you may not post any false or misleading statements; and',
              'you may not organize a campaign encouraging others to post reviews, whether positive or negative.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="p">
          We may accept, reject, or remove reviews in our sole discretion. We have absolutely no
          obligation to screen reviews or to delete reviews, even if anyone considers reviews
          objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily
          represent our opinions or the views of any of our affiliates or partners. We do not assume
          liability for any review or for any claims, liabilities, or losses resulting from any
          review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide,
          royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce,
          modify, translate, transmit by any means, display, perform, and/or distribute all content
          relating to reviews.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="MOBILE APPLICATION LICENSE" />
        <Box as="h3" className="h4">
          Use License
        </Box>
        <Box as="p">
          If you access the Site via a mobile application, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the mobile application
          on wireless electronic devices owned or controlled by you, and to access and use the
          mobile application on such devices strictly in accordance with the terms and conditions of
          this mobile application license contained in these Terms of Use. You shall not:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'except as permitted by applicable law,decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application;',
              'make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application;',
              'violate any applicable laws, rules, or regulations in connection with your access or use of the application;',
              'remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application;',
              'use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended;',
              'make the application available over a network or other environment permitting access or use by multiple devices or users at the same time;',
              'use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application;',
              'use the application to send automated queries to any website or to send any unsolicited commercial e-mail; or',
              'use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="h3" className="h4">
          Apple and Android Devices
        </Box>
        <Box as="p">
          The following terms apply when you use a mobile application obtained from either the Apple
          Store or Google Play (each an “App Distributor”) to access the Site:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'the license granted to you for our mobile application is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service;',
              'we are responsible for providing any maintenance and support services with respect to the mobile application as specified in the terms and conditions of this mobile application license contained in these Terms of Use or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application;',
              'in the event of any failure of the mobile application to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the mobile application, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the mobile application;',
              'you represent and warrant that (i) you are not located in a country that is subject to a U.S. government embargo, or that has been designated by the U.S. government as a “terrorist supporting” country and (ii) you are not listed on any U.S. government list of prohibited or restricted parties;',
              'you must comply with applicable third-party terms of agreement when using the mobile application, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the mobile application; and',
              'you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Terms of Use, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Terms of Use against you as a third-party beneficiary thereof.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="SOCIAL MEDIA" />
        <Box as="p">
          As part of the functionality of the Site, you may link your account with online accounts
          you have with third-party service providers (each such account, a “Third-Party Account”)
          by either:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'providing your Third-Party Account login information through the Site; or',
              'allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="p">By granting us access to any Third-Party Accounts, you understand that:</Box>
        <Box as="ol">
          {useMemo(
            () => [
              'we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network Content”) so that it is available on and through the Site via your account, including without limitation any friend lists and',
              'we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="SUBMISSIONS" />
        <Box as="p">
          You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or
          other information regarding the Site (&ldquo;Submissions&rdquo;) provided by you to us are
          non-confidential and shall become our sole property. We shall own exclusive rights,
          including all intellectual property rights, and shall be entitled to the unrestricted use
          and dissemination of these Submissions for any lawful purpose, commercial or otherwise,
          without acknowledgment or compensation to you. You hereby waive all moral rights to any
          such Submissions, and you hereby warrant that any such Submissions are original with you
          or that you have the right to submit such Submissions. You agree there shall be no
          recourse against us for any alleged or actual infringement or misappropriation of any
          proprietary right in your Submissions.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="THIRD-PARTY WEBSITES AND CONTENT" />
        <Box as="p">
          The Site may contain (or you may be sent via the Site) links to other websites
          (&ldquo;Third-Party Websites&rdquo;) as well as articles, photographs, text, graphics,
          pictures, designs, music, sound, video, information, applications, software, and other
          content or items belonging to or originating from third parties (&ldquo;Third-Party
          Content&rdquo;). Such Third-Party Websites and Third-Party Content are not investigated,
          monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not
          responsible for any Third-Party Websites accessed through the Site or any Third-Party
          Content posted on, available through, or installed from the Site, including the content,
          accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or
          contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking
          to, or permitting the use or installation of any Third-Party Websites or any Third-Party
          Content does not imply approval or endorsement thereof by us. If you decide to leave the
          Site and access the Third-Party Websites or to use or install any Third-Party Content, you
          do so at your own risk, and you should be aware these Terms of Use no longer govern. You
          should review the applicable terms and policies, including privacy and data gathering
          practices, of any website to which you navigate from the Site or relating to any
          applications you use or install from the Site. Any purchases you make through Third-Party
          Websites will be through other websites and from other companies, and we take no
          responsibility whatsoever in relation to such purchases which are exclusively between you
          and the applicable third party. You agree and acknowledge that we do not endorse the
          products or services offered on Third-Party Websites and you shall hold us harmless from
          any harm caused by your purchase of such products or services. Additionally, you shall
          hold us harmless from any losses sustained by you or harm caused to you relating to or
          resulting in any way from any Third-Party Content or any contact with Third-Party
          Websites.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="SITE MANAGEMENT" />
        <Box as="p">We reserve the right, but not the obligation, to:</Box>
        <Box as="ol">
          {useMemo(
            () => [
              'monitor the Site for violations of these Terms of Use;',
              'take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities;',
              'in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;',
              'in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and',
              'otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="HEALTH POLICY" />
        <Box as="p">
          By being a cribmd health plan subscriber(whether by you or third parties), you strictly
          agree to comply with the terms of this health policy. Failure to take reasonable care in
          adhering to the policies in this terms of use may result in a claim not being paid,
          underwriting terms being changed, the agreement is canceled, and/or any treatment costs
          already paid being reclaimed:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'In the event of a claim being filed, the procedures listed below must be followed to ensure due diligence between both parties. All receipts relating to the claim must be provided and must be original;',
              'That your filed claim will remain unpaid until we have reviewed and accepted your application;',
              'CribMD does not cover pre-existing medical conditions or chronic conditions which are listed as follows: Obesity, Cancer, Epilepsy, or brain disease, or ailment that with reasonable certainty existed at the time of purchase of this policy. Whether or not previously manifested, symptomatic, diagnosed, treated prior to the effective date, including any chronic or recurring complications or consequences related to or arising from such ailment;',
              'The offers we do not cover may be stated on our official website from time to time, which will apply to you notwithstanding whether you have subscribed to a health plan before the new offer is being stated;',
              'In the case of a Basic Plan Subscriber, the total benefit claimed by a subscriber shall not exceed 150% of the yearly total sum payable by the subscriber. For Premium Plan Subscriber, the total benefit claimed shall not exceed 165% of the yearly total sum payable by the subscriber. The same applies to Family Plan, Classic Corporate Plan, and Executive Corporate Plan with maximum benefit claim not exceeding 180%, 200%, and 220% respectively;',
              'That you permit the medical information you have provided to be disclosed to any employee in the CribMD PLC for risk management and underwriting purposes. This information can also be used to maintain management information for business analysis;'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="PRIVACY POLICY" />
        <Box as="p">
          We care about data privacy and security. Please review our
          <Anchor href="/privacy"> Privacy Policy</Anchor>. By using the Site, you agree to be bound
          by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised
          the Site is hosted in Nigeria/ the USA. If you access the Site from any other region of
          the world with laws or other requirements governing personal data collection, use, or
          disclosure that differ from applicable laws in Nigeria/ the USA, then through your
          continued use of the Site, you are transferring your data to Nigeria/ the USA, and you
          agree to have your data transferred to and processed in Nigeria/ the USA.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="TERM AND TERMINATION" />
        <Box as="p">
          These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT
          LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE
          DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
          WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
          THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU
          POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </Box>
        <Box as="p">
          If we terminate or suspend your account for any reason, you are prohibited from
          registering and creating a new account under your name, a fake or borrowed name, or the
          name of any third party, even if you may be acting on behalf of the third party. In
          addition to terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil, criminal, and
          injunctive redress.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="MODIFICATIONS AND INTERRUPTIONS" />
        <Box as="p">
          We reserve the right to change, modify, or remove the contents of the Site at any time or
          for any reason at our sole discretion without notice. However, we have no obligation to
          update any information on our Site. We also reserve the right to modify or discontinue all
          or part of the Site without notice at any time. We will not be liable to you or any third
          party for any modification, price change, suspension, or discontinuance of the Site.
        </Box>
        <Box as="p">
          We cannot guarantee the Site will be available at all times. We may experience hardware,
          software, or other problems or need to perform maintenance related to the Site, resulting
          in interruptions, delays, or errors. We reserve the right to change, revise, update,
          suspend, discontinue, or otherwise modify the Site at any time or for any reason without
          notice to you. You agree that we have no liability whatsoever for any loss, damage, or
          inconvenience caused by your inability to access or use the Site during any downtime or
          discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us
          to maintain and support the Site or to supply any corrections, updates, or releases in
          connection therewith.
        </Box>
      </LazyBox>
      <LazyBox as="section">
        <Heading text="UPDATES TO OUR WEBSITE/APP" />
        <Box as="p">
          CribMD may from time to time provide enhancements or improvements to the features/
          functionality of the website/app, which may include patches, bug fixes, updates, upgrades
          and other modifications (&quot;Updates&quot;).
        </Box>
        <Box as="p">
          Updates may modify or delete certain features and/or functionalities of the website/app.
          You agree that CribMD has no obligation to
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'provide any Updates, or',
              'continue to provide or enable any particular features and/or functionalities of the website/app to you.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="p">You further agree that all Updates will be</Box>
        <Box as="ol">
          {useMemo(
            () => [
              'deemed to constitute an integral part of the website/app, and',
              'subject to the terms and conditions of this Agreement.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="UPDATES TO OUR TERMS" />
        <Box as="p">
          We may change our Service and policies, and we may need to make changes to these Terms so
          that they accurately reflect our Service and policies. Unless otherwise required by law,
          we will notify you (for example, through our Service) before we make changes to these
          Terms and give you an opportunity to review them before they go into effect. Then, if you
          continue to use the Service, you will be bound by the updated Terms. If you do not want to
          agree to these or any updated Terms, you can delete your account.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="GOVERNING LAW" />
        <Box as="p">
          These Terms shall be governed by and defined following the laws of Nigeria. CribMD PLC and
          yourself irrevocably consent that the courts of Nigeria shall have exclusive jurisdiction
          to resolve any dispute which may arise in connection with these terms.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="DISPUTE RESOLUTION" />
        <Box as="strong">Informal Negotiations</Box>
        <Box as="p">
          To expedite resolution and control the cost of any dispute, controversy, or claim related
          to these Terms of Use (each &quot;Dispute&quot; and collectively, the “Disputes”) brought
          by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties
          agree to first attempt to negotiate any Dispute (except those Disputes expressly provided
          below) informally for at least thirty (30) days before initiating arbitration. Such
          informal negotiations commence upon written notice from one Party to the other Party.
        </Box>
        <Box as="strong">Binding Arbitration</Box>
        <Box as="p">
          Any dispute arising out of or in connection with this contract, including any question
          regarding its existence, validity, or termination, shall be referred to and finally
          resolved by the International Commercial Arbitration Court under the European Arbitration
          Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC,
          which, as a result of referring to it, is considered as the part of this clause. The
          number of arbitrators shall be two (2). The seat, or legal place, of arbitration shall be
          Lagos, Nigeria. The language of the proceedings shall be English. The governing law of the
          contract shall be the substantive law of Nigeria.
        </Box>
        <Box as="strong">Restrictions</Box>
        <Box as="p">
          The Parties agree that any arbitration shall be limited to the Dispute between the Parties
          individually. To the full extent permitted by law,
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'no arbitration shall be joined with any other proceeding;',
              'there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and',
              'there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.'
            ],
            []
          ).map(renderListItem)}
        </Box>
        <Box as="strong">Exceptions to Informal Negotiations and Arbitration</Box>
        <Box as="p">
          The Parties agree that the following Disputes are not subject to the above provisions
          concerning informal negotiations and binding arbitration: (a) (b) any Dispute related to,
          or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use;
          and (c)
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party;',
              'any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and',
              'any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="CORRECTIONS" />
        <Box as="p">
          There may be information on the Site that contains typographical errors, inaccuracies, or
          omissions, including descriptions, pricing, availability, and various other information.
          We reserve the right to correct any errors, inaccuracies, or omissions and to change or
          update the information on the Site at any time, without prior notice.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="TYPOGRAPHICAL ERRORS" />
        <Box as="p">
          In the event a product and/or service is listed at an incorrect price or with incorrect
          information due to typographical error, we shall have the right to refuse or cancel any
          orders placed for the product and/or service listed at the incorrect price. We shall have
          the right to refuse or cancel any such order/subscription whether or not the order has
          been confirmed and your credit card charged. If your credit card has already been charged
          for the purchase and your order is canceled, we shall immediately issue a credit to your
          credit card account or other payment account in the amount of the charge
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="DISCLAIMER" />
        <Box as="p">
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE
          SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
          WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE
          THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
          ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES
          LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,',
              'PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,',
              'ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,',
              'ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE,',
              'ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR',
              'ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="LIMITATIONS OF LIABILITY" />
        <Box as="p">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD
          PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
          DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
          YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY
          CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO
          THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE THREE (3) MONTH PERIOD PRIOR TO ANY CAUSE
          OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS
          ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
          APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
          AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="INDEMNIFICATION" />
        <Box as="p">
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
          affiliates, and all of our respective officers, agents, partners, and employees, from and
          against any loss, damage, liability, claim, or demand, including reasonable attorneys’
          fees and expenses, made by any third party due to or arising out of:
        </Box>
        <Box as="ol">
          {useMemo(
            () => [
              'use of the Site;',
              'breach of these Terms of Use;',
              'any breach of your representations and warranties set forth in these Terms of Use;',
              'your violation of the rights of a third party, including but not limited to intellectual property rights; or',
              'any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.'
            ],
            []
          ).map(renderListItem)}
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="USER DATA" />
        <Box as="p">
          We will maintain certain data that you transmit to the Site for the purpose of managing
          the performance of the Site, as well as data relating to your use of the Site. Although we
          perform regular routine backups of data, you are solely responsible for all data that you
          transmit or that relates to any activity you have undertaken using the Site. You agree
          that we shall have no liability to you for any loss or corruption of any such data, and
          you hereby waive any right of action against us arising from any such loss or corruption
          of such data.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES" />
        <Box as="p">
          Visiting the Site, sending us emails, and completing online forms constitute electronic
          communications. You consent to receive electronic communications, and you agree that all
          agreements, notices, disclosures, and other communications we provide to you
          electronically, via email and on the Site, satisfy any legal requirement that such
          communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
          CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
          RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any
          rights or requirements under any statutes, regulations, rules, ordinances, or other laws
          in any jurisdiction which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by any means other than
          electronic means.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="MISCELLANEOUS" />
        <Box as="p">
          These Terms of Use and any policies or operating rules posted by us on the Site or in
          respect to the Site constitute the entire agreement and understanding between you and us.
          Our failure to exercise or enforce any right or provision of these Terms of Use shall not
          operate as a waiver of such right or provision. These Terms of Use operate to the fullest
          extent permissible by law. We may assign any or all of our rights and obligations to
          others at any time. We shall not be responsible or liable for any loss, damage, delay, or
          failure to act caused by any cause beyond our reasonable control. If any provision or part
          of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable,
          that provision or part of the provision is deemed severable from these Terms of Use and
          does not affect the validity and enforceability of any remaining provisions. There is no
          joint venture, partnership, employment or agency relationship created between you and us
          as a result of these Terms of Use or use of the Site. You agree that these Terms of Use
          will not be construed against us by virtue of having drafted them. You hereby waive any
          and all defenses you may have based on the electronic form of these Terms of Use and the
          lack of signing by the parties hereto to execute these Terms of Use.
        </Box>
      </LazyBox>

      <LazyBox as="section">
        <Heading text="CONTACT US" />
        <Box as="p">
          In order to resolve a complaint regarding the Site or to receive further information
          regarding use of the Site, please contact us at:
        </Box>
        <Box as="strong">CribMD PLC</Box>
        <br />
        <Box as="strong">4 Babatope Bejide Cres</Box>
        <br />
        <Box as="strong">Lekki, Lagos 105102</Box>
        <br />
        <Box as="strong">Nigeria</Box>
        <br />
        <Box as="strong">Phone: +234 906 034 6075</Box>
        <br />
        <Box as="strong">support@cribmd.com</Box>
        <br />
      </LazyBox>
    </>
  );
};

export default memo(MainBody);
