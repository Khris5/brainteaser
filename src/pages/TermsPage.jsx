import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <div className="bg-brand-off-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Please review the terms for the Brain Teaser Game carefully before
            participating.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Introduction & Agreement
          </h2>
          <p className="mb-8">
            These Terms and Conditions ("Terms") govern your participation in
            the Brain Teaser Game ("the Promotion"). These Terms are
            supplementary to the standard terms and conditions for your mobile
            network service. In these Terms, “We”, “Us”, and “Our” refer to{" "}
            <strong className="font-semibold">Capivas Africa Ltd</strong>. “You”
            or “Your” refers to you, the participant or subscriber
            ("Participant") of the Promotion. By participating in the Promotion,
            you are deemed to have read, understood, and accepted these Terms.
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            1. The Promoter
          </h3>
          <p className="mb-8">
            The Promotion is organized by{" "}
            <strong className="font-semibold">Capivas Africa Ltd</strong>, a
            company registered in Nigeria ("Capivas"). Capivas is responsible
            for managing all aspects of this Promotion, including the redemption
            of prizes.
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            2. Duration
          </h3>
          <p className="mb-8">
            The Promotion is scheduled to run from{" "}
            <strong className="font-semibold">5th March 2025</strong> to{" "}
            <strong className="font-semibold">5th March 2026</strong> (the
            "Promotional Period"). Capivas reserves the right to extend or
            shorten the Promotional Period, subject to the formal approval of
            the National Lottery Regulatory Commission.
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            3. Territory
          </h3>
          <p className="mb-8">
            The Promotion is open only to legal residents of the Federal
            Republic of Nigeria ("Nigeria").
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            4. Entry Requirements
          </h3>
          <p className="mb-4">
            To be eligible to participate in the Promotion, you must meet all of
            the following conditions:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
            <li>Be 18 years of age or older;</li>
            <li>Possess full legal capacity;</li>
            <li>Be a subscriber to a mobile network in Nigeria;</li>
            <li>Be a legal resident of Nigeria at the time of entry;</li>
            <li>Be participating voluntarily;</li>
            <li>
              Have reviewed and understood these Terms and Conditions; and
            </li>
            <li>
              Acknowledge and accept that any fees paid or costs incurred while
              participating in the Promotion are non-refundable.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-brand-dark mt-6 mb-3">
            Exclusions:
          </h4>
          <p className="mb-4">
            The following persons are expressly excluded from participating in
            the Promotion:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
            <li>
              Employees of Capivas, its affiliates, and subsidiary companies, as
              well as their Family Members.
            </li>
            <li>Representatives or agents of Capivas.</li>
            <li>
              Anyone else professionally connected with the organization or
              administration of the Promotion.
            </li>
          </ul>
          <p className="mb-8 text-sm text-gray-600">
            For the purpose of these Terms, "Family Members" is defined as a
            spouse, ex-spouse, de facto spouse, child or step-child (whether
            natural or by adoption), parent, step-parent, grandparent,
            step-grandparent, uncle, aunt, niece, nephew, brother, sister,
            step-brother, step-sister, or first cousin.
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            5. Participation and Prizes
          </h3>
          <p className="mb-4">
            The Promotion is open to all registered mobile phone subscribers in
            Nigeria who meet the eligibility criteria. During the Promotional
            Period, eligible Participants will have the chance to win an
            all-expense-paid trip to Dubai or its cash equivalent.
          </p>
          <h4 className="text-lg font-semibold text-brand-dark mt-6 mb-3">
            How to Participate:
          </h4>
          <p className="mb-4">Participants can join by:</p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
            <li>
              Sending an SMS keyword (
              <strong className="font-semibold">BTD</strong> for Daily,{" "}
              <strong className="font-semibold">BTW</strong> for Weekly, or{" "}
              <strong className="font-semibold">BTM</strong> for Monthly) to the
              shortcode <strong className="font-semibold">33347</strong>.
            </li>
            <li>Dialing a specified USSD string.</li>
            <li>Dialing an IVR code.</li>
            <li>Visiting a promotional URL or installing the official App.</li>
          </ul>
          <p className="mb-4">
            Participants are encouraged to play more to increase their chances
            of winning. Participants will be entered into a pool from which
            monthly draws will be conducted. Winners will be contacted by our
            official agents and will be required to provide valid travel
            documents for visa and flight bookings if they choose the travel
            prize.
          </p>

          <h4 className="text-lg font-semibold text-brand-dark mt-6 mb-3">
            Subscription and Fees:
          </h4>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
            <li>
              <strong className="font-semibold">Daily Plan:</strong> N50
            </li>
            <li>
              <strong className="font-semibold">Weekly Plan:</strong> N200 (for
              7 days)
            </li>
            <li>
              <strong className="font-semibold">Monthly Plan:</strong> N1000
              (for 30 days)
            </li>
            <li>
              <strong className="font-semibold">On-Demand:</strong> N50 per
              additional game
            </li>
          </ul>
          <p className="mb-8">
            Winners must hold an active subscription with their respective
            Mobile Network Operator at the time of winning.
          </p>

          <h3 className="text-xl font-bold text-brand-dark border-t border-gray-200 pt-6 mb-3">
            6. General Conditions
          </h3>
          <div className="space-y-4">
            <p>
              <strong className="font-semibold text-gray-800">
                a) Prize-Related Costs:
              </strong>{" "}
              All costs, taxes, and expenses associated with prize acceptance
              that exceed the stated value of the prize are the sole
              responsibility of the winning Participant. For the avoidance of
              doubt, Capivas will not be liable for any taxes on behalf of
              winners.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                b) Limitation of Liability & Indemnity:
              </strong>{" "}
              To the fullest extent permitted by law, including the Federal
              Competition and Consumer Protection Act, 2018, Capivas is not
              responsible for any loss or damage suffered by any Participant. By
              participating, you agree to indemnify and hold Capivas harmless
              from all damages or liabilities arising from your participation.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                c) Warranties:
              </strong>{" "}
              Capivas excludes all warranties (express or implied),
              representations, and liabilities regarding this Promotion, other
              than for death or personal injury caused by its proven negligence
              or fraud.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                d) Right to Disqualify:
              </strong>{" "}
              Capivas reserves the right to disqualify any entry based on
              fraudulent activity or transaction reversals.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                e) Changes and Cancellation:
              </strong>{" "}
              Subject to regulatory approval, Capivas reserves the right to
              modify, suspend, or cancel the Promotion for reasons beyond its
              control, such as technical difficulties or fraud.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                f) Data Protection and Publicity:
              </strong>{" "}
              Winners will be required to consent to the use of their name,
              image, and personal data for marketing purposes in accordance with
              the Nigeria Data Protection Regulation, 2019.
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                g) Governing Law:
              </strong>{" "}
              These Terms are governed by the laws of the Federal Republic of
              Nigeria. Any disputes shall be referred to a competent court in
              Nigeria.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
