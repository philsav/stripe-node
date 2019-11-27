declare namespace Stripe {
  namespace Checkout {
    /**
     * The Session object.
     */
    interface Session {
      /**
       * The value (`auto` or `required`) for whether Checkout collected the
       * customer's billing address.
       */
      billing_address_collection?: string | null;

      /**
       * The URL the customer will be directed to if they decide to cancel payment and return to your website.
       */
      cancel_url?: string;

      /**
       * A unique string to reference the Checkout Session. This can be a
       * customer ID, a cart ID, or similar, and can be used to reconcile the
       * session with your internal systems.
       */
      client_reference_id?: string | null;

      /**
       * The ID of the customer for this session.
       * For Checkout Sessions in `payment` or `subscription` mode, Checkout
       * will create a new customer object based on information provided
       * during the session unless an existing customer was provided when
       * the session was created.
       */
      customer?: string | Customer | null;

      /**
       * If provided, this value will be used when the Customer object is created.
       * If not provided, customers will be asked to enter their email address.
       * Use this parameter to prefill customer data if you already have an email
       * on file. To access information about the customer once a session is
       * complete, use the `customer` field.
       */
      customer_email?: string | null;

      /**
       * The line items, plans, or SKUs purchased by the customer.
       */
      display_items?:
        | Array<{
          /**
           * Amount for the display item.
           */
          amount?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          custom?: {
            /**
             * The description of the line item.
             */
            description?: string | null;

            /**
             * The images of the line item.
             */
            images?: Array<string> | null;

            /**
             * The name of the line item.
             */
            name: string;
          };

          plan?: Plan;

          /**
           * Quantity of the display item being purchased.
           */
          quantity?: number;

          sku?: Sku;

          /**
           * The type of display item. One of `custom`, `plan` or `sku`
           */
          type?: string;
        }>
        | null;

      /**
       * Unique identifier for the object. Used to pass to `redirectToCheckout`
       * in Stripe.js.
       */
      id?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * The IETF language tag of the locale Checkout is displayed in. If blank
       * or `auto`, the browser's locale is used.
       */
      locale?:
        | 'auto'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fi'
        | 'fr'
        | 'it'
        | 'ja'
        | 'nb'
        | 'nl'
        | 'pl'
        | 'pt'
        | 'sv'
        | 'zh'
        | null;

      /**
       * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
       */
      mode?: 'payment' | 'setup' | 'subscription' | null;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'checkout.session';

      /**
       * The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
       */
      payment_intent?: string | PaymentIntent | null;

      /**
       * A list of the types of payment methods (e.g. card) this Checkout
       * Session is allowed to accept.
       */
      payment_method_types?: Array<string>;

      /**
       * The ID of the SetupIntent for Checkout Sessions in `setup` mode.
       */
      setup_intent?: string | SetupIntent | null;

      /**
       * Describes the type of transaction being performed by Checkout in order to customize
       * relevant text on the page, such as the submit button. `submit_type` can only be
       * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
       * in `subscription` or `setup` mode.
       * Supported values are `auto`, `book`, `donate`, or `pay`.
       */
      submit_type?: 'auto' | 'book' | 'donate' | 'pay' | null;

      /**
       * The ID of the subscription for Checkout Sessions in `subscription` mode.
       */
      subscription?: string | Subscription | null;

      /**
       * The URL the customer will be directed to after the payment or
       * subscription creation is successful.
       */
      success_url?: string;
    }

    /**
     * Creates a Session object.
     */
    interface SessionCreateParams {
      /**
       * Specify whether Checkout should collect the customer's billing address. If set to `required`, Checkout will always collect the customer's billing address. If not set or set to `auto` Checkout will only collect the billing address when necessary.
       */
      billing_address_collection?: 'auto' | 'required';

      /**
       * The URL the customer will be directed to if they decide to cancel payment and return to your website.
       */
      cancel_url: string;

      /**
       * A unique string to reference the Checkout Session. This can be a
       * customer ID, a cart ID, or similar, and can be used to reconcile the
       * session with your internal systems.
       */
      client_reference_id?: string;

      /**
       * ID of an existing customer, if one exists. Only supported for Checkout
       * Sessions in `payment` or `subscription` mode, but not Checkout Sessions
       * in `setup` mode. The email stored on the customer will be used to prefill
       * the email field on the Checkout page. If the customer changes their email
       * on the Checkout page, the Customer object will be updated with the new
       * email.
       * If blank for Checkout Sessions in `payment` or `subscription` mode,
       * Checkout will create a new customer object based on information
       * provided during the session.
       */
      customer?: string;

      /**
       * If provided, this value will be used when the Customer object is created.
       * If not provided, customers will be asked to enter their email address.
       * Use this parameter to prefill customer data if you already have an email
       * on file. To access information about the customer once a session is
       * complete, use the `customer` field.
       */
      customer_email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of items the customer is purchasing. Use this parameter for
       * one-time payments or adding invoice line items to a subscription (used
       * in conjunction with `subscription_data`).
       */
      line_items?: Array<{
        /**
         * The amount to be collected per unit of the line item.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The description for the line item.
         */
        description?: string;

        /**
         * A list of images representing this line item.
         */
        images?: Array<string>;

        /**
         * The name for the line item.
         */
        name: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity: number;
      }>;

      /**
       * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used. Supported values are `auto`, `da`, `de`, `en`, `es`, `fi`, `fr`, `it`, `ja`, `nb`, `nl`, `pl`, `pt`, `sv`, or `zh`.
       */
      locale?:
        | 'auto'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fi'
        | 'fr'
        | 'it'
        | 'ja'
        | 'nb'
        | 'nl'
        | 'pl'
        | 'pt'
        | 'sv'
        | 'zh';

      /**
       * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
       */
      mode?: 'payment' | 'setup' | 'subscription';

      /**
       * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
       */
      payment_intent_data?: {
        /**
         * The amount of the application fee (if any) that will be applied to the payment and transferred to the
         * application owner's Stripe account. To use an application fee, the request must be made on
         * behalf of another account, using the `Stripe-Account` header or an OAuth key. For more
         * information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
         */
        application_fee_amount?: number;

        /**
         * Capture method of this PaymentIntent, one of `automatic` or `manual`.
         */
        capture_method?: 'automatic' | 'manual';

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: {
          [key: string]: string;
        };

        /**
         * The Stripe account ID for which these funds are intended. For details,
         * see the PaymentIntents [use case for connected
         * accounts](/docs/payments/connected-accounts).
         */
        on_behalf_of?: string;

        /**
         * Email address that the receipt for the resulting payment will be sent to.
         */
        receipt_email?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If present, the payment method used with this PaymentIntent can be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer, even after the transaction completes.
         *
         * Use `on_session` if you intend to only reuse the payment method when your customer is present in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. For more, learn to [save card details after a payment](https://stripe.com/docs/payments/save-after-payment).
         *
         * Stripe uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules. For example, if your customer is impacted by [SCA](https://stripe.com/docs/strong-customer-authentication), using `off_session` will ensure that they are authenticated while processing this PaymentIntent. You will then be able to collect [off-session payments](https://stripe.com/docs/payments/cards/charging-saved-cards#off-session-payments-with-saved-cards) for this customer.
         */
        setup_future_usage?: 'off_session' | 'on_session';

        /**
         * Shipping information for this payment.
         */
        shipping?: {
          /**
           * Shipping address.
           */
          address: {
            city?: string;

            country?: string;

            line1: string;

            line2?: string;

            postal_code?: string;

            state?: string;
          };

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string;

          /**
           * Recipient name.
           */
          name: string;

          /**
           * Recipient phone (including extension).
           */
          phone?: string;

          /**
           * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
           */
          tracking_number?: string;
        };

        /**
         * Extra information about the payment. This will appear on your
         * customer's statement when this payment succeeds in creating a charge.
         */
        statement_descriptor?: string;

        /**
         * The parameters used to automatically create a Transfer when the payment succeeds.
         * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
         */
        transfer_data?: {
          /**
           * If specified, successful charges will be attributed to the destination
           * account for tax reporting, and the funds from charges will be transferred
           * to the destination account. The ID of the resulting transfer will be
           * returned on the successful charge's `transfer` field.
           */
          destination: string;
        };
      };

      /**
       * A list of the types of payment methods (e.g. card) this Checkout
       * Session is allowed to accept. The only supported values today are `card` and `ideal`.
       */
      payment_method_types: Array<'card' | 'ideal'>;

      /**
       * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
       */
      setup_intent_data?: {
        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: {
          [key: string]: string;
        };

        /**
         * The Stripe account for which the setup is intended.
         */
        on_behalf_of?: string;
      };

      /**
       * Describes the type of transaction being performed by Checkout in order to customize
       * relevant text on the page, such as the submit button. `submit_type` can only be
       * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
       * in `subscription` or `setup` mode.
       * Supported values are `auto`, `book`, `donate`, or `pay`.
       */
      submit_type?: 'auto' | 'book' | 'donate' | 'pay';

      /**
       * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
       */
      subscription_data?: {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. To use an application fee percent, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * A list of items, each with an attached plan, that the customer is
         * subscribing to. Use this parameter for subscriptions. To create one-time
         * payments, use `line_items`.
         */
        items: Array<{
          /**
           * Plan ID for this item.
           */
          plan: string;

          /**
           * Quantity for this item.
           */
          quantity?: number;
        }>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: {
          [key: string]: string;
        };

        /**
         * Unix timestamp representing the end of the trial period the customer
         * will get before being charged for the first time. Has to be at least
         * 48 hours in the future.
         */
        trial_end?: number;

        /**
         * Indicates if a plan's `trial_period_days` should be applied to the
         * subscription. Setting `trial_end` on `subscription_data` is preferred.
         * Defaults to `false`.
         */
        trial_from_plan?: boolean;

        /**
         * Integer representing the number of trial period days before the
         * customer is charged for the first time. Has to be at least 1.
         */
        trial_period_days?: number;
      };

      /**
       * The URL to which Stripe should send customers when payment or setup
       * is complete.
       * If you'd like access to the Checkout Session for the successful
       * payment, read more about it in our guide on [fulfilling your payments
       * with webhooks](/docs/payments/checkout/fulfillment#webhooks).
       */
      success_url: string;
    }

    /**
     * Retrieves a Session object.
     */
    interface SessionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SessionsResource {
      /**
       * Creates a Session object.
       */
      create(
        params: SessionCreateParams,
        options?: HeaderOptions
      ): Promise<Checkout.Session>;

      /**
       * Retrieves a Session object.
       */
      retrieve(
        id: string,
        params?: SessionRetrieveParams,
        options?: HeaderOptions
      ): Promise<Checkout.Session>;
    }
  }
}